export type MealStorageDTO = {
  title: string;
  data: {
    id: string;
    title: string;
    hour: string;
    isHealth: boolean;
  }[];
};
