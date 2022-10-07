import AsyncStorage from '@react-native-async-storage/async-storage'
import { getMeals } from '@storage/meal/getMeals'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { MEALS_COLLECTION } from '@storage/storageConfig'

export async function createMeal (newMeal: MealStorageDTO) {
  try {
    const storedMeals = await getMeals()

    if (storedMeals) {
      const index = storedMeals.findIndex(
        (day) =>
          new Date(day.date).toDateString() === newMeal.date.toDateString()
      )

      if (index !== -1) {
        storedMeals[index].data.push(newMeal.data[0])
        storedMeals[index].data.sort(
          (a, b) => new Date(a.time).valueOf() - new Date(b.time).valueOf()
        )
      } else {
        storedMeals.push(newMeal)
        storedMeals.sort(
          (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf()
        )
      }

      const storage = JSON.stringify(storedMeals)

      await AsyncStorage.setItem(MEALS_COLLECTION, storage)
    } else {
      const meal = JSON.stringify([newMeal])
      await AsyncStorage.setItem(MEALS_COLLECTION, meal)
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('finally')
  }
}
