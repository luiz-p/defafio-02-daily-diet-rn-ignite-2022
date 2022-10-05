import React from 'react'

import { ModalProps } from 'react-native'

import { Button } from '@components/Button'

import * as S from './styles'

type Props = ModalProps & {
  title: string;
  confirmText?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export function Dialog ({
  title,
  confirmText = 'Sim',
  onConfirm,
  onCancel,
  ...rest
}: Props) {
  return (
    <S.Modal transparent animationType="fade" {...rest}>
      <S.Container>
        <S.Card>
          <S.Title>{title}</S.Title>

          <S.TwoColumnsWrapper>
            <S.ButtonWrapper>
              <Button title="Cancelar" color="SECONDARY" onPress={onCancel} />
            </S.ButtonWrapper>

            <S.ButtonWrapper>
              <Button title={confirmText} />
            </S.ButtonWrapper>
          </S.TwoColumnsWrapper>
        </S.Card>
      </S.Container>
    </S.Modal>
  )
}
