import AsyncStorage from '@react-native-async-storage/async-storage'
import { getMeals } from '@storage/meal/getMeals'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { MEALS_COLLECTION } from '@storage/storageConfig'

import { findByDate } from './findByDate'

export async function deleteMeal (mealToDelete: MealStorageDTO) {
  try {
    const storedMeals = await getMeals()

    if (storedMeals) {
      const date = await findByDate(storedMeals, mealToDelete)
      const meal = date.data.findIndex(
        (meal) => meal.id === mealToDelete.data[0].id
      )
      date.data.splice(meal, 1)

      await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(storedMeals))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('finally')
  }
}
