import { axiosInstance } from '@/shared/lib/axiosInstance';
import { IReviewsData } from '../types';

export const REVIEWS_ENDPOINT_PATH = '/api/slider' as const;

export class ReviewsApi {
  static async getReviews(): Promise<IReviewsData> {
    const response = await axiosInstance.get(REVIEWS_ENDPOINT_PATH);
    return response.data;
  }
}