import { ArrowLeft } from 'phosphor-react-native'
import { Dimensions, TouchableOpacityProps } from 'react-native'
import styled, { css } from 'styled-components/native'

const { width } = Dimensions.get('window')

export type StatisticsStyleProps = {
  isHighPercent?: boolean;
  cardType?: 'HIGH_PERCENT' | 'LOW_PERCENT';
};

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View<StatisticsStyleProps>`
  height: 200px;
  justify-content: center;
  background-color: ${({ theme, isHighPercent }) =>
    isHighPercent ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const BackButton = styled.TouchableOpacity.attrs<TouchableOpacityProps>(
  () => ({
    hitSlop: { top: 30, left: 30, bottom: 30, right: 30 }
  })
)<TouchableOpacityProps>`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  margin: 56px 24px;
`

export const ArrowIcon = styled(ArrowLeft).attrs<StatisticsStyleProps>(
  ({ theme, isHighPercent }) => ({
    size: 24,
    color: isHighPercent ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
  })
)<StatisticsStyleProps>``

export const StatisticsWrapper = styled.View`
  flex: 1;
  align-items: center;
  margin-top: -33px;
  padding: 33px 24px 0 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-radius: 20px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
    margin-bottom: 23px;
  `}
`

export const Card = styled.View<StatisticsStyleProps>`
  width: 100%;
  padding: 16px;
  margin-bottom: 12px;
  border-radius: 8px;
  background-color: ${({ theme, cardType }) =>
    cardType === 'HIGH_PERCENT'
      ? theme.COLORS.GREEN_LIGHT
      : cardType === 'LOW_PERCENT'
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_6};
`

export const CardWrapper = styled.View`
  width: ${(width - 48) / 2 - 6}px;
  flex-direction: row;
  align-self: flex-start;
`

export const Separator = styled.View`
  width: 12px;
`
