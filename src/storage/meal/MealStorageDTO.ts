export type MealStorageDTO = {
  date: Date;
  data: {
    id: string;
    title: string;
    time: Date;
    isHealthy: boolean;
  }[];
};
