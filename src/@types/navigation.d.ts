export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      new: undefined;
      meal: {
        item: {
          id: string;
          title: string;
          description?: string | undefined;
          time: Date;
          isHealthy: boolean;
        };
      };
    }
  }
}
