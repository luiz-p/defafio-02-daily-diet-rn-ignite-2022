import React from 'react'

import { TextInputProps } from 'react-native'

import * as S from './styles'

type Props = S.NewMealStyleProps & TextInputProps;

export function Input ({ isTextArea, ...rest }: Props) {
  return (
    <S.Input
      {...rest}
      isTextArea={isTextArea}
      style={{ textAlignVertical: 'top' }}
      multiline={isTextArea && true}
    />
  )
}
