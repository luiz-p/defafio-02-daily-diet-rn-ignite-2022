import { format } from 'date-fns'

import * as S from './styles'

type Props = {
  item: {
    id: string;
    title: string;
    time: Date;
    isHealthy: boolean;
  };
};

export function MealItem ({ item }: Props) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Time>{format(item.time, 'HH:mm')}</S.Time>
        <S.Separator />
        <S.Title numberOfLines={1}>{item.title}</S.Title>
      </S.Wrapper>

      <S.CheckBox isHealthy={item.isHealthy} />
    </S.Container>
  )
}
