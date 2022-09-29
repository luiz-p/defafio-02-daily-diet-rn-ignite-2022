import {
  IconContext,
  PencilSimpleLine,
  Plus,
  Trash
} from 'phosphor-react-native'
import styled from 'styled-components/native'

export type ButtonStyleProps = {
  color?: 'PRIMARY' | 'SECONDARY';
  fullWidth?: boolean;
};

export const Container = styled.TouchableOpacity<ButtonStyleProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '191px')};
  background-color: ${({ theme, color }) =>
    color === 'PRIMARY' ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_7};
  border-width: ${({ color }) => (color === 'PRIMARY' ? 0 : 1)}px;
  border-color: ${({ theme, color }) =>
    color === 'PRIMARY' ? '' : theme.COLORS.GRAY_1};
  border-radius: 6px;
`

export const Title = styled.Text<ButtonStyleProps>`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme, color }) =>
    color === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
`

export const Provider = styled(IconContext.Provider).attrs<ButtonStyleProps>(
  ({ theme, color }) => ({
    value: {
      color: `${
        color === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1
      }`,
      size: 18,
      weight: 'bold'
    }
  })
)<ButtonStyleProps>``

export const PlusIcon = styled(Plus)`
  margin-right: 12px;
`

export const EditIcon = styled(PencilSimpleLine)`
  margin-right: 12px;
`

export const TrashIcon = styled(Trash)`
  margin-right: 12px;
`
