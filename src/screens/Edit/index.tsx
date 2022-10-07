import React, { useState } from 'react'

import { format } from 'date-fns/esm'

import { Button } from '@components/Button'
import { DefaultHeader } from '@components/DefaultHeader'
import { Input } from '@components/Input'
import RNDateTimePicker, {
  DateTimePickerEvent
} from '@react-native-community/datetimepicker'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MealItemTypes } from '@storage/meal/MealStorageDTO'
import { updateMeal } from '@storage/meal/updateMeal'

import * as S from './styles'

type RouteParams = {
  item: MealItemTypes;
};

export function Edit () {
  const route = useRoute()
  const { item } = route.params as RouteParams
  const navigation = useNavigation()

  const [title, setTitle] = useState(item.title)
  const [description, setDescription] = useState(item.description)
  const [date, setDate] = useState<Date>(new Date(item.day))
  const [time, setTime] = useState<Date>(new Date(item.time))
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showTimePicker, setShowTimePicker] = useState(false)
  const [isHealthy, setIsHealthy] = useState<boolean | undefined>(
    item.isHealthy
  )

  const isValidForm = title && isHealthy !== undefined && date && time !== null

  function handleDatePicker (event: DateTimePickerEvent, date?: Date) {
    if (date && event.type === 'set') {
      setDate(date)
    }
    setShowDatePicker(false)
  }

  function handleTimePicker (event: DateTimePickerEvent, date?: Date) {
    if (date && event.type === 'set') {
      setTime(date)
    }
    setShowTimePicker(false)
  }

  async function handleForm () {
    if (isValidForm) {
      const meal = {
        date,
        data: [
          {
            id: item.id,
            title,
            description,
            day: date,
            time,
            isHealthy
          }
        ]
      }
      await updateMeal(meal)
      navigation.navigate('home')
    }
  }

  return (
    <S.Container>
      <DefaultHeader title="Editar refeição" />

      <S.Form>
        <S.Label>Nome</S.Label>
        <Input value={title} onChangeText={setTitle} />

        <S.Label>Descrição</S.Label>
        <Input isTextArea value={description} onChangeText={setDescription} />

        <S.TwoColumnsWrapper>
          <S.PickerWrapper>
            <S.Label>Data</S.Label>
            <S.PickerButton onPress={() => setShowDatePicker(true)}>
              <S.PickerText>
                {date ? format(new Date(date), 'dd/MM/yy') : ''}
              </S.PickerText>
            </S.PickerButton>
          </S.PickerWrapper>

          <S.PickerWrapper>
            <S.Label>Hora</S.Label>
            <S.PickerButton onPress={() => setShowTimePicker(true)}>
              <S.PickerText>
                {time ? format(new Date(time), 'HH:mm') : ''}
              </S.PickerText>
            </S.PickerButton>
          </S.PickerWrapper>
        </S.TwoColumnsWrapper>

        {showDatePicker && (
          <RNDateTimePicker
            mode="date"
            value={date}
            onChange={handleDatePicker}
          />
        )}

        {showTimePicker && (
          <RNDateTimePicker
            mode="time"
            is24Hour
            value={time}
            onChange={handleTimePicker}
          />
        )}

        <S.Label>Está dentro da dieta?</S.Label>

        <S.TwoColumnsWrapper>
          <S.HealthyButton
            onPress={() => setIsHealthy(true)}
            isHealthy={isHealthy || undefined}
          >
            <S.HealthyButtonCircle circle="PRIMARY" />
            <S.HealthyButtonText>Sim</S.HealthyButtonText>
          </S.HealthyButton>

          <S.HealthyButton
            onPress={() => setIsHealthy(false)}
            isHealthy={!isHealthy ? isHealthy : undefined}
          >
            <S.HealthyButtonCircle circle="SECONDARY" />
            <S.HealthyButtonText>Não</S.HealthyButtonText>
          </S.HealthyButton>
        </S.TwoColumnsWrapper>

        <S.Footer>
          {isValidForm && (
            <Button title="Salvar alterações" onPress={handleForm} />
          )}
        </S.Footer>
      </S.Form>
    </S.Container>
  )
}
