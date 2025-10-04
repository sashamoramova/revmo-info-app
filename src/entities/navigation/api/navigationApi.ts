import { axiosInstance } from '@/shared/lib/axiosInstance';
import { INavigationData } from '../types';

export const NAVIGATION_ENDPOINT_PATH = '/api/navigation' as const;

export class NavigationApi {
  static async getNavigation(): Promise<INavigationData> {
    const response = await axiosInstance.get(NAVIGATION_ENDPOINT_PATH);
    return response.data;
  }
}