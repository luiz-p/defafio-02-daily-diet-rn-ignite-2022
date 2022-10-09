import AsyncStorage from '@react-native-async-storage/async-storage'
import { getMeals } from '@storage/meal/getMeals'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { MEALS_COLLECTION } from '@storage/storageConfig'

import { findByDate } from './findByDate'

export async function updateMeal (mealToUpdate: MealStorageDTO) {
  try {
    const storedMeals = await getMeals()

    if (storedMeals) {
      const date = await findByDate(storedMeals, mealToUpdate)
      const mealToEdit = date.data.findIndex(meal => meal.id === mealToUpdate.data[0].id)
      date.data[mealToEdit] = mealToUpdate.data[0]
      console.log('new meal:: ', storedMeals)

      await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(storedMeals))
    }
  } catch (error) {
    console.log(error)
  }
}
