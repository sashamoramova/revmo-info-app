export interface IMenuItem {
  id: number;
  label: string;
  link: string;
}

export interface ILogo {
  text: string;
  link: string;
}

export interface INavigationData {
  logo: ILogo;
  menu: IMenuItem[];
}

// Можно добавить общий тип ответа (как у вас IServerResponse)
export interface IApiResponse<T> {
  data?: T;
  message?: string;
  success?: boolean;
}