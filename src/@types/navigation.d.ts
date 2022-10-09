import { MealItemTypes } from '@storage/meal/MealStorageDTO'

export type StatsRouteParams = {
  percentage: number;
  betterSequence: number;
  allMealsCount: number;
  healthyMeals: number;
  notHealthyMeals: number;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: StatsRouteParams;
      new: undefined;
      meal: {
        item: MealItemTypes;
      };
      edit: {
        item: MealItemTypes;
      };
    }
  }
}
