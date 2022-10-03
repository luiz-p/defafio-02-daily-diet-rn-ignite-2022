import styled, { css } from 'styled-components/native'

export type NewMealStyleProps = {
  isTextArea?: boolean;
}

export const Input = styled.TextInput<NewMealStyleProps>`
  height: ${({ isTextArea }) => isTextArea ? '120px' : '48px'};
  padding: 14px;
  margin: 4px 0 24px;
  border-radius: 6px;
  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_5};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
`
