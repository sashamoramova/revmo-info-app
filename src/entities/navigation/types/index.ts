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

//тип ответа API
export interface IApiResponse<T> {
  data?: T;
  message?: string;
  success?: boolean;
}