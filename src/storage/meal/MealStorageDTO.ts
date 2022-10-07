export type MealItemTypes = {
  id: string | number[];
  title: string;
  description?: string;
  time: Date;
  isHealthy: boolean;
};

export type MealStorageDTO = {
  date: Date;
  data: MealItemTypes[];
};
