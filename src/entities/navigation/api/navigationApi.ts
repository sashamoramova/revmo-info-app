import { INavigationData } from "../types";

export const NAVIGATION_ENDPOINT_PATH = "/api/navigation" as const;

export class NavigationApi {
  static async getNavigation(): Promise<INavigationData> {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!baseUrl) {
      throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
    }

    const fullUrl = `${baseUrl}${NAVIGATION_ENDPOINT_PATH}`;

    const response = await fetch(fullUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch navigation: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  }
}
