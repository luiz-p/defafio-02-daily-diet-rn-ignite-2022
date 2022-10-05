import React from 'react'

import { format } from 'date-fns/esm'
import { LogBox } from 'react-native'

import { Button } from '@components/Button'
import { DefaultHeader } from '@components/DefaultHeader'
import { useRoute } from '@react-navigation/native'

import * as S from './styles'

// TODO: refactor with context api
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state'
])

type RouteParams = {
  item: {
    id: string;
    title: string;
    description?: string | undefined;
    time: Date;
    isHealthy: boolean;
  };
};

export function Meal () {
  const route = useRoute()
  const { item } = route.params as RouteParams

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
          {format(item.time, 'dd/MM/yy')} às {format(item.time, 'HH:mm')}
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
            onPress={() => console.log('navigate to edit screen')}
          />
          <Button
            title="Excluir refeição"
            icon="trash"
            color="SECONDARY"
            onPress={() => console.log('delete')}
          />
        </S.Footer>
      </S.Content>
    </S.Container>
  )
}
