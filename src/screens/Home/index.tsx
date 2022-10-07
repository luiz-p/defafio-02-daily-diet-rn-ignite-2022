/** @format */

import { useCallback, useState } from 'react'

import { format } from 'date-fns/esm'
import { SectionList } from 'react-native'

import logoImg from '@assets/logo.png'
import { Button } from '@components/Button'
import { Highlight } from '@components/Highlight'
import { ListEmpty } from '@components/ListEmpty'
import { MealItem } from '@components/MealItem'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { getMeals } from '@storage/meal/getMeals'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'

import * as S from './styles'

export function Home () {
  const [mealsList, setMealsList] = useState<MealStorageDTO[]>([])
  const [isHighPercent, setIsHighPercent] = useState(true)

  const navigation = useNavigation()

  async function fetchMeals () {
    try {
      const data = await getMeals()
      if (data) {
        setMealsList(data)
      }
    } catch (error) {
      //
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
    }, [])
  )

  return (
    <S.Container>
      <S.Header>
        <S.Logo source={logoImg} />
        <S.UserImg source={{ uri: 'https://github.com/luiz-p.png' }} />
      </S.Header>

      <S.StatsButton
        isHighPercent={isHighPercent}
        onPress={() => navigation.navigate('statistics')}
      >
        <S.ArrowIcon isHighPercent={isHighPercent} />
        <Highlight title="90,86%" subtitle="das refeições dentro da dieta" />
      </S.StatsButton>

      <S.Title>Refeições</S.Title>
      <Button
        title="Nova Refeição"
        icon="plus"
        onPress={() => navigation.navigate('new')}
      />

      <SectionList
        sections={mealsList}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <MealItem
            item={item}
            onPress={() => navigation.navigate('meal', { item })}
          />
        )}
        renderSectionHeader={({ section: { date } }) => (
          <S.SectionHeader>
            {format(new Date(date), 'dd.MM.yy')}
          </S.SectionHeader>
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Registre sua primeira refeição." />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 24 },
          mealsList.length === 0 && { flex: 1 }
        ]}
      />
    </S.Container>
  )
}
