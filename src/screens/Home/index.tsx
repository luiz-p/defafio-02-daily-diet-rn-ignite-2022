import { useState } from 'react'

import { format } from 'date-fns/esm'
import { SectionList } from 'react-native'

import logoImg from '@assets/logo.png'
import { Button } from '@components/Button'
import { Highlight } from '@components/Highlight'
import { ListEmpty } from '@components/ListEmpty'
import { MealItem } from '@components/MealItem'
import { useNavigation } from '@react-navigation/native'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'

import * as S from './styles'

const DATA = [
  {
    date: new Date('2022-08-12T03:24:00'),
    data: [
      { id: '01', title: 'X-tudo', time: new Date('2022-08-12T23:00:00'), isHealthy: false },
      {
        id: '02',
        title: 'Whey protein com leite',
        time: new Date('2022-08-12T19:00:00'),
        isHealthy: true
      },
      {
        id: '03',
        title: 'Salada cesar com frango grelhado',
        time: new Date('2022-08-12T15:30:00'),
        isHealthy: true
      },
      {
        id: '04',
        title: 'Vitamina de banana com goiaba',
        time: new Date('2022-08-12T12:30:00'),
        isHealthy: true
      }
    ]
  },
  {
    date: new Date('2022-08-11T03:24:00'),
    data: [
      { id: '05', title: 'X-tudo', time: new Date('2022-08-12T23:00:00'), isHealthy: false },
      { id: '06', title: 'Sanduíche', time: new Date('2022-08-12T19:00:00'), isHealthy: true },
      {
        id: '07',
        title: 'Lasanha de frango com queijo',
        time: new Date('2022-08-12T15:30:00'),
        isHealthy: false
      },
      {
        id: '08',
        title: 'Torta de chocolate',
        time: new Date('2022-08-12T12:30:00'),
        isHealthy: false
      }
    ]
  }
]

export function Home () {
  const [mealsList, setMealsList] = useState<MealStorageDTO[]>(DATA)
  const [isHighPercent, setIsHighPercent] = useState(true)

  const navigation = useNavigation()

  return (
    <S.Container>
      <S.Header>
        <S.Logo source={logoImg} />
        <S.UserImg source={{ uri: 'https://github.com/luiz-p.png' }} />
      </S.Header>

      <S.StatsButton
        isHighPercent={isHighPercent}
        onPress={() => navigation.navigate('statistics')}
      >
        <S.ArrowIcon isHighPercent={isHighPercent} />
        <Highlight title="90,86%" subtitle="das refeições dentro da dieta" />
      </S.StatsButton>

      <S.Title>Refeições</S.Title>
      <Button title="Nova Refeição" icon="plus" />

      <SectionList
        sections={mealsList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealItem item={item} />}
        renderSectionHeader={({ section: { date } }) => (
          <S.SectionHeader>{format(date, 'dd.MM.yy')}</S.SectionHeader>
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Registre sua primeira refeição." />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 24 },
          mealsList.length === 0 && { flex: 1 }
        ]}
      />
    </S.Container>
  )
}
