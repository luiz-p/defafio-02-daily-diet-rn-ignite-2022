import React from 'react'

import { DefaultHeader } from '@components/DefaultHeader'
import { Input } from '@components/Input'

import * as S from './styles'

export function NewMeal () {
  return (
    <S.Container>
      <DefaultHeader title="Nova Refeição" />

      <S.Form>
        <S.Label>Nome</S.Label>
        <Input />

        <S.Label>Descrição</S.Label>
        <Input isTextArea />

        <S.TwoColumnsWrapper>
          <S.PickerWrapper>
            <S.Label>Data</S.Label>
          </S.PickerWrapper>

          <S.PickerWrapper>
            <S.Label>Hora</S.Label>
          </S.PickerWrapper>
        </S.TwoColumnsWrapper>

        <S.Label>Está dentro da dieta?</S.Label>
      </S.Form>
    </S.Container>
  )
}
