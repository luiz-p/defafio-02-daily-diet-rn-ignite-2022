import React, { useState } from 'react'

import { Highlight } from '@components/Highlight'
import { useNavigation } from '@react-navigation/native'

import * as S from './styles'

export function Statistics () {
  const navigation = useNavigation()

  const [isHighPercent, setIsHighPercent] = useState(true)

  return (
    <S.Container>
      <S.Header isHighPercent={isHighPercent}>
        <S.BackButton onPress={() => navigation.navigate('home')}>
          <S.ArrowIcon isHighPercent={isHighPercent} />
        </S.BackButton>
        <Highlight title="90,86%" subtitle="das refeições dentro da dieta" />
      </S.Header>

      <S.StatisticsWrapper>
        <S.Title>Estatísticas gerais</S.Title>

        <S.Card>
          <Highlight
            title="4"
            subtitle="melhor sequência de pratos dentro da dieta"
            type="SECONDARY"
          />
        </S.Card>

        <S.Card>
          <Highlight
            title="109"
            subtitle="refeições registradas"
            type="SECONDARY"
          />
        </S.Card>

        <S.TwoColumnsWrapper>
          <S.Card cardType="HIGH_PERCENT" isTwoColumns>
            <Highlight
              title="32"
              subtitle="refeições dentro da dieta"
              type="SECONDARY"
            />
          </S.Card>

          <S.Card cardType="LOW_PERCENT" isTwoColumns>
            <Highlight
              title="77"
              subtitle="refeições dentro da dieta"
              type="SECONDARY"
            />
          </S.Card>
        </S.TwoColumnsWrapper>
      </S.StatisticsWrapper>
    </S.Container>
  )
}
