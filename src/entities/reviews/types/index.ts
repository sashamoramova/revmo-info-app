export interface IReview {
  id: number;
  photo: string;
  name: string;
  date: string;
  text: string;
}

export interface IReviewsData {
  enabled: boolean;
  title: string;
  description: string;
  count: number;
  data: IReview[];
}

//тип ответа API
export interface IApiResponse<T> {
  data?: T;
  message?: string;
  success?: boolean;
}