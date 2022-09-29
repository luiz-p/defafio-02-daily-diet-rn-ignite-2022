import logoImg from '@assets/logo.png'
import { Highlight } from '@components/Highlight'

import * as S from './styles'

export function Home () {
  return (
    <S.Container>
      <S.Header>
        <S.Logo source={logoImg} />
        <S.UserImg source={{ uri: 'https://github.com/luiz-p.png' }} />
      </S.Header>

      <S.StatsButton>
        <S.ArrowIcon />
        <Highlight title='90,86%' subtitle='das refeições dentro da dieta' />
      </S.StatsButton>
    </S.Container>
  )
}
