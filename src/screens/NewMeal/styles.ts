import { Dimensions } from 'react-native'
import styled, { css } from 'styled-components/native'

const { width } = Dimensions.get('window')

export const Container = styled.View`
  flex: 1;
`

export const Form = styled.View`
  flex: 1;
  margin-top: -28px;
  border-radius: 20px;
  padding: 40px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `}
`

export const TwoColumnsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const PickerWrapper = styled.View`
  width: ${(width - 48) / 2 - 10}px;
`
