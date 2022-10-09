/** @format */

import { useCallback, useState } from 'react'

import { format } from 'date-fns/esm'
import { SectionList } from 'react-native'
import { StatsRouteParams } from 'src/@types/navigation'

import logoImg from '@assets/logo.png'
import { Button } from '@components/Button'
import { Highlight } from '@components/Highlight'
import { ListEmpty } from '@components/ListEmpty'
import { MealItem } from '@components/MealItem'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { getMeals } from '@storage/meal/getMeals'
import { MealItemTypes, MealStorageDTO } from '@storage/meal/MealStorageDTO'

import * as S from './styles'

export function Home () {
  const [mealsList, setMealsList] = useState<MealStorageDTO[]>([])
  const [isHighPercent, setIsHighPercent] = useState(true)
  const [stats, setStats] = useState<StatsRouteParams>({
    percentage: 0,
    betterSequence: 0,
    allMealsCount: 0,
    healthyMeals: 0,
    notHealthyMeals: 0
  })

  const navigation = useNavigation()

  function handleStats (data: MealStorageDTO[]) {
    const allMeals: MealItemTypes[] = []

    let allMealsCount = 0
    let healthyMeals = 0
    let notHealthyMeals = 0
    let sequence = 0
    let betterSequence = 0
    data
      .map((day) => day.data)
      .forEach((meals) => meals.forEach((meal) => allMeals.push(meal)))

    allMeals.forEach((meal) => {
      allMealsCount++

      meal.isHealthy
        ? healthyMeals++ && sequence++
        : notHealthyMeals++ && (sequence = 0)

      if (sequence > betterSequence) betterSequence = sequence
    })

    setStats({
      percentage: (healthyMeals / allMealsCount) * 100,
      betterSequence,
      allMealsCount,
      healthyMeals,
      notHealthyMeals
    })
  }

  async function fetchMeals () {
    try {
      const data = await getMeals()
      if (data) {
        setMealsList(data)
        handleStats(data)
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
        isHighPercent={stats.percentage >= 50}
        onPress={() => navigation.navigate('statistics', stats)}
      >
        <S.ArrowIcon isHighPercent={isHighPercent} />
        <Highlight
          title={`${(Math.round(stats.percentage * 100) / 100).toFixed(2)}%`}
          subtitle="das refeições dentro da dieta"
        />
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
