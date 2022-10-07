import React, { useState } from 'react'

import { format } from 'date-fns/esm'
import { LogBox } from 'react-native'

import { Button } from '@components/Button'
import { DefaultHeader } from '@components/DefaultHeader'
import { Dialog } from '@components/Dialog'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MealItemTypes } from '@storage/meal/MealStorageDTO'

import * as S from './styles'

// TODO: refactor with context api
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state'
])

type RouteParams = {
  item: MealItemTypes;
};

export function Meal () {
  const route = useRoute()
  const { item } = route.params as RouteParams
  const navigation = useNavigation()
  const [dialogVisible, setDialogVisible] = useState(false)

  return (
    <S.Container>
      <DefaultHeader
        title="Refeição"
        color={item.isHealthy ? 'HIGH_PERCENT' : 'LOW_PERCENT'}
      />

      <S.Content>
        <S.Title>{item.title}</S.Title>
        {item.description && <S.Description>{item.description}</S.Description>}

        <S.SubTitle>Data e Hora</S.SubTitle>
        <S.Description>
          {format(new Date(item.time), 'dd/MM/yy')} às{' '}
          {format(new Date(item.time), 'HH:mm')}
        </S.Description>

        <S.StatsCard>
          <S.Circle isHealthy={item.isHealthy} />
          <S.CardText>
            {item.isHealthy ? 'dentro da dieta' : 'fora da dieta'}
          </S.CardText>
        </S.StatsCard>

        <S.Footer>
          <Button
            style={{ marginBottom: 9 }}
            title="Editar refeição"
            icon="edit"
            onPress={() => navigation.navigate('edit', { item })}
          />
          <Button
            title="Excluir refeição"
            icon="trash"
            color="SECONDARY"
            onPress={() => setDialogVisible(true)}
          />
        </S.Footer>

        <Dialog
          statusBarTranslucent
          visible={dialogVisible}
          title="Deseja realmente excluir o registro da refeição?"
          confirmText="Sim, excluir"
          onConfirm={() => console.log('confirm')}
          onCancel={() => setDialogVisible(false)}
        />
      </S.Content>
    </S.Container>
  )
}
