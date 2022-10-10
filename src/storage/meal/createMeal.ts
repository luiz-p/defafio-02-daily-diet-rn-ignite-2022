import AsyncStorage from '@react-native-async-storage/async-storage'
import { getMeals } from '@storage/meal/getMeals'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { MEALS_COLLECTION } from '@storage/storageConfig'

import { findByDate } from './findByDate'

export async function createMeal (newMeal: MealStorageDTO) {
  try {
    const storedMeals = await getMeals()

    if (storedMeals) {
      const day = await findByDate(storedMeals, newMeal)

      if (day) {
        day.data.push(newMeal.data[0])
        day.data.sort(
          (a, b) => new Date(b.time).valueOf() - new Date(a.time).valueOf()
        )
      } else {
        storedMeals.push(newMeal)
        storedMeals.sort(
          (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
        )
      }

      const storage = JSON.stringify(storedMeals)

      await AsyncStorage.setItem(MEALS_COLLECTION, storage)
    } else {
      const meal = JSON.stringify([newMeal])
      await AsyncStorage.setItem(MEALS_COLLECTION, meal)
    }
  } catch (error) {
    throw error
  }
}
