export interface Event {
    _id: string;
    name: string;
    slug: {
      current: string;
    };
    eventType?: string;
    date: string;
    doorsOpen: number;
    venue?: {
      name: string;
    };
    headline?: {
      name: string;
    };
    image?: {
      asset: {
        url: string;
      };
    };
    details?: Array<any>; 
    tickets: string;
    isPublished: boolean;
  }
  