import React from 'react'

import { useNavigation } from '@react-navigation/native'

import * as S from './styles'

type Props = S.DefaultHeaderStyleProps & {
  title: string;
};

export function DefaultHeader ({ title, color }: Props) {
  const navigation = useNavigation()

  return (
    <S.Container color={color}>
      <S.BackButton onPress={() => navigation.goBack()}>
        <S.ArrowIcon />
      </S.BackButton>

      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
