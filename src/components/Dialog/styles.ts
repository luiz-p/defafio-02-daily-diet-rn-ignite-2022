import { Dimensions } from 'react-native'
import styled, { css } from 'styled-components/native'

const { width } = Dimensions.get('window')

export const Modal = styled.Modal``

export const Container = styled.View`
  padding: 24px;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
`

export const Card = styled.View`
  width: 100%;
  padding: 40px 24px 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.X}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
    text-align: center;
  `}
`

export const TwoColumnsWrapper = styled.View`
  margin-top: 32px;
  flex-direction: row;
  justify-content: space-between;
`

export const ButtonWrapper = styled.View`
  width: ${(width - 96) / 2 - 6}px;
`
