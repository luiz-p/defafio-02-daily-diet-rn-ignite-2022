import { format } from 'date-fns'
import { TouchableOpacityProps } from 'react-native'

import { MealItemTypes } from '@storage/meal/MealStorageDTO'

import * as S from './styles'

type Props = TouchableOpacityProps & {
  item: MealItemTypes
};

export function MealItem ({ item, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Wrapper>
        <S.Time>{format(new Date(item.time), 'HH:mm')}</S.Time>
        <S.Separator />
        <S.Title numberOfLines={1}>{item.title}</S.Title>
      </S.Wrapper>

      <S.CheckBox isHealthy={item.isHealthy} />
    </S.Container>
  )
}
