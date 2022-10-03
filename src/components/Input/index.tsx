import React from 'react'

import { TextInputProps } from 'react-native'

import * as S from './styles'

type Props = S.NewMealStyleProps &
  TextInputProps & {
    placeholder?: string;
  };

export function Input ({ placeholder, isTextArea }: Props) {
  return (
    <S.Input
      placeholder={placeholder}
      isTextArea={isTextArea}
      style={{ textAlignVertical: 'top' }}
      multiline={true}
    />
  )
}
