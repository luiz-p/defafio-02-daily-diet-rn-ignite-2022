import React from 'react'

import { StatsRouteParams } from 'src/@types/navigation'

import { Highlight } from '@components/Highlight'
import { useNavigation, useRoute } from '@react-navigation/native'

import * as S from './styles'

export function Statistics () {
  const navigation = useNavigation()
  const route = useRoute()
  const stats = route.params as StatsRouteParams

  return (
    <S.Container>
      <S.Header
        isHighPercent={stats.percentage >= 50 || isNaN(stats.percentage)}
      >
        <S.BackButton onPress={() => navigation.navigate('home')}>
          <S.ArrowIcon
            isHighPercent={stats.percentage >= 50 || isNaN(stats.percentage)}
          />
        </S.BackButton>
        <Highlight
          title={
            stats.percentage
              ? `${(Math.round(stats.percentage * 100) / 100)
                  .toFixed(2)
                  .replace(/(\.0+|0+)$/, '')}%`
              : stats.allMealsCount > 0
                ? '0%'
                : '-'
          }
          subtitle="das refeições dentro da dieta"
        />
      </S.Header>

      <S.StatisticsWrapper>
        <S.Title>Estatísticas gerais</S.Title>

        <S.Card>
          <Highlight
            title={`${stats.betterSequence}`}
            subtitle="melhor sequência de pratos dentro da dieta"
            type="SECONDARY"
          />
        </S.Card>

        <S.Card>
          <Highlight
            title={`${stats.allMealsCount}`}
            subtitle="refeições registradas"
            type="SECONDARY"
          />
        </S.Card>

        <S.TwoColumnsWrapper>
          <S.Card cardType="HIGH_PERCENT" isTwoColumns>
            <Highlight
              title={`${stats.healthyMeals}`}
              subtitle="refeições dentro da dieta"
              type="SECONDARY"
            />
          </S.Card>

          <S.Card cardType="LOW_PERCENT" isTwoColumns>
            <Highlight
              title={`${stats.notHealthyMeals}`}
              subtitle="refeições dentro da dieta"
              type="SECONDARY"
            />
          </S.Card>
        </S.TwoColumnsWrapper>
      </S.StatisticsWrapper>
    </S.Container>
  )
}
