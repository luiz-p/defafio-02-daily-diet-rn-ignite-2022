import logoImg from '@assets/logo.png'

import * as S from './styles'

export function Home () {
  return (
    <S.Container>
      <S.Header>
        <S.Logo source={logoImg} />
        <S.UserImg source={{ uri: 'https://github.com/luiz-p.png' }} />
      </S.Header>
    </S.Container>
  )
}
