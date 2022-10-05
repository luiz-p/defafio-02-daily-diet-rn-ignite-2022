import styled, { css } from 'styled-components/native'

export type ItemStyleProps = {
  isHealthy: boolean;
};

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px 14px 12px;
  margin-top: 8px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
`

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Time = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const Separator = styled.View`
  height: 14px;
  border: 0.7px solid ${({ theme }) => theme.COLORS.GRAY_4};
  margin: 0 12px 0 12px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
    max-width: 255px;
  `}
`

export const CheckBox = styled.View<ItemStyleProps>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme, isHealthy }) =>
    isHealthy ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`
