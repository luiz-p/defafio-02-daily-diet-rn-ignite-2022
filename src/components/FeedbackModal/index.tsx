import React from 'react'

import { ModalProps } from 'react-native'

import healthy from '@assets/healthy.png'
import not_healthy from '@assets/not_healthy.png'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'

import * as S from './styles'

type Props = ModalProps & S.ModalStyleProps;

export function FeedbackModal ({ isHealthy, ...rest }: Props) {
  const navigation = useNavigation()

  return (
    <S.Modal {...rest}>
      <S.Container>
        <S.Title isHealthy={isHealthy}>
          {isHealthy ? 'Continue assim!' : 'Que pena!'}
        </S.Title>

        {isHealthy
          ? (
          <S.Subtitle>
            Você continua <S.Subtitle isBold>dentro da dieta</S.Subtitle>. Muito
            bem!
          </S.Subtitle>
            )
          : (
          <S.Subtitle>
            Você <S.Subtitle isBold>saiu da dieta</S.Subtitle>. dessa vez, mas
            continue se esforçando e não desista!
          </S.Subtitle>
            )}

        <S.FeedBackImage source={isHealthy ? healthy : not_healthy} />

        <Button
          title="Ir para a página inicial"
          fullWidth={false}
          onPress={() => navigation.navigate('home')}
        />
      </S.Container>
    </S.Modal>
  )
}
