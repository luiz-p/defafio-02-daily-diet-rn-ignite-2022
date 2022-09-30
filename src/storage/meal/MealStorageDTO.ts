export type MealStorageDTO = {
  title: string;
  data: {
    id: string;
    title: string;
    time: string;
    isHealthy: boolean;
  }[];
};
