import { ArrowLeft } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

export type DefaultHeaderStyleProps = {
  color?: 'HIGH_PERCENT' | 'LOW_PERCENT';
};

export const Container = styled.View<DefaultHeaderStyleProps>`
  height: 132px;
  flex-direction: row;
  justify-content: center;
  padding: 0 24px;
  align-items: center;
  background-color: ${({ theme, color }) =>
    color === 'HIGH_PERCENT'
      ? theme.COLORS.GREEN_LIGHT
      : color === 'LOW_PERCENT'
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_5};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.X}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const BackButton = styled.TouchableOpacity`
  z-index: 1;
  position: absolute;
  left: 24px;
`

export const ArrowIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: `${theme.COLORS.GRAY_2}`
}))``
