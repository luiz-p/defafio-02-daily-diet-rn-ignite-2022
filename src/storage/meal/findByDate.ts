import { MealStorageDTO } from '@storage/meal/MealStorageDTO'

export async function findByDate (
  storedMeals: MealStorageDTO[],
  mealToFind: MealStorageDTO
) {
  const index = storedMeals.findIndex(
    (day) =>
      new Date(day.date).toDateString() ===
      new Date(mealToFind.date).toDateString()
  )

  return storedMeals[index]
}
