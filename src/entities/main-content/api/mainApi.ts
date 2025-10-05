import { IMainContentData } from "../types";

export const MAIN_ENDPOINT_PATH = "/api/main" as const;

export class MainApi {
  static async getMainData(): Promise<IMainContentData> {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!baseUrl) {
      throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
    }

    const fullUrl = `${baseUrl}${MAIN_ENDPOINT_PATH}`;

    const response = await fetch(fullUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch main data: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  }
}
