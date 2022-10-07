import { MealItemTypes } from '@storage/meal/MealStorageDTO'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
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
