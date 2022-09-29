import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

type Props = TouchableOpacityProps &
  S.ButtonStyleProps & {
    title: string;
    icon?: 'plus' | 'edit' | 'trash' | '';
  };

export function Button ({
  title,
  icon = '',
  color = 'PRIMARY',
  fullWidth = true,
  ...rest
}: Props) {
  return (
    <S.Container color={color} fullWidth={fullWidth} {...rest}>
      <S.Provider color={color} value={{}}>
        {icon === 'plus' && <S.PlusIcon />}
        {icon === 'edit' && <S.EditIcon />}
        {icon === 'trash' && <S.TrashIcon />}
      </S.Provider>

      <S.Title color={color}>{title}</S.Title>
    </S.Container>
  )
}
