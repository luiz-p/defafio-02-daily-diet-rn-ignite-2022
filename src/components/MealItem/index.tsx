import { format } from 'date-fns'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

type Props = TouchableOpacityProps & {
  item: {
    id: string;
    title: string;
    time: Date;
    isHealthy: boolean;
  };
};

export function MealItem ({ item, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Wrapper>
        <S.Time>{format(item.time, 'HH:mm')}</S.Time>
        <S.Separator />
        <S.Title numberOfLines={1}>{item.title}</S.Title>
      </S.Wrapper>

      <S.CheckBox isHealthy={item.isHealthy} />
    </S.Container>
  )
}
