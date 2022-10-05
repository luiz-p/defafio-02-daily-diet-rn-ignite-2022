import React, { useState } from 'react'

import { format } from 'date-fns/esm'

import { Button } from '@components/Button'
import { DefaultHeader } from '@components/DefaultHeader'
import { Input } from '@components/Input'
import RNDateTimePicker, {
  DateTimePickerEvent
} from '@react-native-community/datetimepicker'
import { useRoute } from '@react-navigation/native'

import * as S from './styles'

type RouteParams = {
  item: {
    id: string;
    title: string;
    description?: string | undefined;
    time: Date;
    isHealthy: boolean;
  };
};

export function Edit () {
  const route = useRoute()
  const { item } = route.params as RouteParams

  const [title, setTitle] = useState(item.title)
  const [description, setDescription] = useState(item.description)
  const [date, setDate] = useState<Date>(item.time)
  const [time, setTime] = useState<Date>(item.time)
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

  function handleForm () {
    const meal = {
      date,
      data: {
        id: item.id,
        title,
        description,
        time,
        isHealthy
      }
    }
    console.log(meal)
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
                {date ? format(date, 'dd/MM/yy') : ''}
              </S.PickerText>
            </S.PickerButton>
          </S.PickerWrapper>

          <S.PickerWrapper>
            <S.Label>Hora</S.Label>
            <S.PickerButton onPress={() => setShowTimePicker(true)}>
              <S.PickerText>{time ? format(time, 'HH:mm') : ''}</S.PickerText>
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
