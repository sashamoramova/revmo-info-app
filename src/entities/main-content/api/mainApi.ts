import { axiosInstance } from '@/shared/lib/axiosInstance';
import { IMainContentData } from '../types';

export const MAIN_ENDPOINT_PATH = '/api/main' as const;

export class MainApi {
  static async getMainData(): Promise<IMainContentData> {
    const response = await axiosInstance.get(MAIN_ENDPOINT_PATH);
    return response.data;
  }
}