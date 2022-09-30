import * as S from './styles'

type Props = {
  item: {
    id: string;
    title: string;
    hour: string;
    isHealth: boolean;
  };
};

export function MealItem ({ item }: Props) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Hour>{item.hour}</S.Hour>
        <S.Separator />
        <S.Title numberOfLines={1}>{item.title}</S.Title>
      </S.Wrapper>

      <S.CheckBox isHealth={item.isHealth} />
    </S.Container>
  )
}
