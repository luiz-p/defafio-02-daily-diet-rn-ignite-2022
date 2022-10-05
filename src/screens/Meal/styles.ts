import styled, { css } from 'styled-components/native'

export type MealStyleProps = {
  isHealthy: boolean;
};

export const Container = styled.View`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
  margin-top: -28px;
  border-radius: 20px;
  padding: 40px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.X}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
    margin-top: 24px;
  `}
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
    margin-top: 8px;
  `}
`

export const StatsCard = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 144px;
  padding: 8px 16px;
  margin-top: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  border-radius: 99px;
`

export const Circle = styled.View<MealStyleProps>`
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 4px;
  background-color: ${({ theme, isHealthy }) =>
    isHealthy ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const CardText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const Footer = styled.View`
  flex: 1;
  justify-content: flex-end;
`
