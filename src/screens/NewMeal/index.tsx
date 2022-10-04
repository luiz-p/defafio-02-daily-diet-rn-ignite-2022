import React, { useState } from 'react'

import { format } from 'date-fns/esm'

import { Button } from '@components/Button'
import { DefaultHeader } from '@components/DefaultHeader'
import { Input } from '@components/Input'
import RNDateTimePicker, {
  DateTimePickerEvent
} from '@react-native-community/datetimepicker'

import * as S from './styles'

export function NewMeal () {
  const [date, setDate] = useState<Date | null>()
  const [time, setTime] = useState<Date | null>()
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showTimePicker, setShowTimePicker] = useState(false)
  const [isHealthy, setIsHealthy] = useState<boolean | undefined>()

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

  return (
    <S.Container>
      <DefaultHeader title="Nova Refeição" />

      <S.Form>
        <S.Label>Nome</S.Label>
        <Input />

        <S.Label>Descrição</S.Label>
        <Input isTextArea />

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
            value={date || new Date()}
            onChange={handleDatePicker}
          />
        )}

        {showTimePicker && (
          <RNDateTimePicker
            mode="time"
            is24Hour
            value={time || new Date()}
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
          <Button title="Cadastrar refeição" onPress={() => {}} />
        </S.Footer>
      </S.Form>
    </S.Container>
  )
}
