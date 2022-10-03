export type MealStorageDTO = {
  date: Date;
  data: {
    id: string;
    title: string;
    description?: string;
    time: Date;
    isHealthy: boolean;
  }[];
};
