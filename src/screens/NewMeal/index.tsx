import React, { useState } from 'react'

import { format } from 'date-fns/esm'
import { Alert } from 'react-native'
import uuid from 'react-native-uuid'

import { Button } from '@components/Button'
import { DefaultHeader } from '@components/DefaultHeader'
import { FeedbackModal } from '@components/FeedbackModal'
import { Input } from '@components/Input'
import RNDateTimePicker, {
  DateTimePickerEvent
} from '@react-native-community/datetimepicker'
import { createMeal } from '@storage/meal/createMeal'
import { AppError } from '@utils/AppError'

import * as S from './styles'

export function NewMeal () {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState<Date | null>()
  const [time, setTime] = useState<Date | null>()
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showTimePicker, setShowTimePicker] = useState(false)
  const [isHealthy, setIsHealthy] = useState<boolean | undefined>()
  const [modalVisible, setModalVisible] = useState(false)

  const isValidForm = title && isHealthy !== undefined && date && time

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
      try {
        const meal = {
          date,
          data: [
            {
              id: uuid.v4(),
              title,
              description,
              day: date,
              time,
              isHealthy
            }
          ]
        }
        createMeal(meal)
        setModalVisible(true)
      } catch (error) {
        if (error instanceof AppError) {
          Alert.alert('Novo', error.message)
        } else {
          Alert.alert(
            'Nova Refeição',
            'Não foi possível criar a nova refeição.'
          )
        }
      }
    }
  }

  return (
    <S.Container>
      <DefaultHeader title="Nova Refeição" />

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
          {isValidForm && (
            <Button title="Cadastrar refeição" onPress={handleForm} />
          )}
        </S.Footer>
      </S.Form>
      <FeedbackModal
        visible={modalVisible}
        isHealthy={!!isHealthy}
        statusBarTranslucent
      />
    </S.Container>
  )
}
