import { MealStorageDTO } from '@storage/meal/MealStorageDTO'

export async function findByDate (
  storedMeals: MealStorageDTO[],
  mealToFind: MealStorageDTO
) {
  const index = storedMeals.findIndex(
    (day) => new Date(day.date).toDateString() === mealToFind.date.toDateString()
  )

  return storedMeals[index]
}
