import AsyncStorage from '@react-native-async-storage/async-storage'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { MEALS_COLLECTION } from '@storage/storageConfig'

export async function getMeals () {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION)

    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : []

    return meals
  } catch (error) {
    console.log(error)
  }
}
