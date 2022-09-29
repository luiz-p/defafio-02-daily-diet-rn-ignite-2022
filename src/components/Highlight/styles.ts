import styled, { css } from 'styled-components/native'

export type HighlightType = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: HighlightType;
}

export const Container = styled.View``

export const Title = styled.Text<Props>`
  text-align: center;
  font-size: ${({ theme, type }) => type === 'PRIMARY' ? theme.FONT_SIZE.XXL : theme.FONT_SIZE.XL}px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`

export const Subtitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `};
`
