import AsyncStorage from '@react-native-async-storage/async-storage'
import { getMeals } from '@storage/meal/getMeals'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { MEALS_COLLECTION } from '@storage/storageConfig'

import { findByDate } from './findByDate'
import { findIndex } from './findIndex'

export async function deleteMeal (mealToDelete: MealStorageDTO) {
  try {
    const storedMeals = await getMeals()

    if (storedMeals) {
      const date = await findByDate(storedMeals, mealToDelete)
      const meal = date.data.findIndex(
        (meal) => meal.id === mealToDelete.data[0].id
      )
      if (date.data.length === 1) {
        const index = await findIndex(storedMeals, mealToDelete)
        storedMeals.splice(index, 1)
      } else {
        date.data.splice(meal, 1)
      }

      await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(storedMeals))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('finally')
  }
}
