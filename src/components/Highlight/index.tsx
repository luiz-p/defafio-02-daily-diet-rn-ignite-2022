import * as S from './styles'

type Props = {
  title: string;
  subtitle: string;
  type?: S.HighlightType
}

export function Highlight ({ title, subtitle, type = 'PRIMARY' }: Props) {
  return (
    <S.Container>
      <S.Title type={type}>
        {title}
      </S.Title>

      <S.Subtitle type={type}>
        {subtitle}
      </S.Subtitle>
    </S.Container>
  )
}
