import styled from 'styled-components/native'

export type ModalStyleProps = {
  isHealthy: boolean;
  isBold?: boolean;
};

export const Modal = styled.Modal``

export const Container = styled.View`
  padding: 24px;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text<ModalStyleProps>`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme, isHealthy }) =>
    isHealthy ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  margin-bottom: 8px;
`

export const Subtitle = styled.Text<ModalStyleProps>`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme, isBold }) => isBold ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  line-height: 20.8px;
  text-align: center;
`

export const FeedBackImage = styled.Image`
  width: 224px;
  height: 288px;
  margin: 40px 0 32px;
`
