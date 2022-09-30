import { ArrowUpRight } from 'phosphor-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export type HomeStyleProps = {
  isHighPercent: boolean;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const UserImg = styled.Image`
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_2};
  border-radius: 20px;
`

export const StatsButton = styled.TouchableOpacity<HomeStyleProps>`
  padding: 20px 8px;
  margin-top: 32px;
  border-radius: 8px;
  background-color: ${({ theme, isHighPercent }) =>
    isHighPercent ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
    margin: 40px 0 8px;
  `}
`

export const ArrowIcon = styled(ArrowUpRight).attrs<HomeStyleProps>(
  ({ theme, isHighPercent }) => ({
    size: 24,
    color: isHighPercent ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
  })
)<HomeStyleProps>`
  position: absolute;
  right: 0;
  margin: 8px;
`

export const SectionHeader = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.X}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
    margin-top: 32px;
  `}
`
