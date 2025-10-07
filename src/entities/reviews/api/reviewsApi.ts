import { IReviewsData } from '../types';

export const REVIEWS_ENDPOINT_PATH = '/api/slider' as const;

export class ReviewsApi {
  static async getReviews(): Promise<IReviewsData> {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!baseUrl) {
      throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
    }

    const fullUrl = `${baseUrl}${REVIEWS_ENDPOINT_PATH}`;

    const response = await fetch(fullUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch reviews data: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  }
}