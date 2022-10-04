import { Dimensions } from 'react-native'
import styled, { css } from 'styled-components/native'

const { width } = Dimensions.get('window')

export type NewMealStyleProps = {
  isHealthy?: boolean;
  circle?: 'PRIMARY' | 'SECONDARY';
};

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

export const PickerButton = styled.TouchableOpacity`
  padding: 14px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  margin: 4px 0 24px;
`

export const PickerText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const HealthyButton = styled.TouchableOpacity<NewMealStyleProps>`
  width: ${(width - 48) / 2 - 10}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin-top: 8px;
  border-radius: 6px;
  background-color: ${({ theme, isHealthy }) =>
    isHealthy === undefined
      ? theme.COLORS.GRAY_6
      : isHealthy
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  border: ${({ theme, isHealthy }) =>
    isHealthy === undefined
      ? 'none'
      : isHealthy
      ? `1px solid ${theme.COLORS.GREEN_DARK}`
      : `1px solid ${theme.COLORS.RED_DARK}`};
`

export const HealthyButtonCircle = styled.View<NewMealStyleProps>`
  height: 8px;
  width: 8px;
  border-radius: 4px;
  margin-right: 8px;
  background-color: ${({ theme, circle }) =>
    circle === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const HealthyButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`
