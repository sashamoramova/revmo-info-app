// Базовые интерфейсы
export interface IButton {
  enabled: boolean;
  label: string;
}

export interface ISidebarItem {
  enabled: boolean;
  label: string;
  url?: string;
}

export interface ISocial {
  enabled: boolean;
  url: string;
}

// Группирующие интерфейсы
export interface IButtons {
  ios: IButton;
  android: IButton;
  apk: IButton;
}

export interface ISidebar {
  download_app: ISidebarItem;
  watch_video: ISidebarItem;
  qr_code: ISidebarItem;
}

export interface ISocials {
  vk: ISocial;
  telegram: ISocial;
  dzen: ISocial;
  vkVideo: ISocial;
}

// Основные данные (как ваш ITaskRowData)
export interface IMainContentData {
  title: string;
  subtitle: string;
  videoUrl: string;
  buttons: IButtons;
  sidebar: ISidebar;
  socials: ISocials;
}

// Типы для удобства (как ваш TaskArrayType)
export type ButtonKeys = keyof IButtons;
export type SocialKeys = keyof ISocials;
export type SidebarKeys = keyof ISidebar;

// Энумы для констант (как ваш TASK_ACTION_TYPE)
export enum SOCIAL_TYPES {
  VK = 'vk',
  TELEGRAM = 'telegram',
  DZEN = 'dzen',
  VK_VIDEO = 'vkVideo'
}

export enum BUTTON_TYPES {
  IOS = 'ios',
  ANDROID = 'android',
  APK = 'apk'
}

// Общий тип ответа API
export interface IApiResponse<T> {
  data?: T;
  message?: string;
  success?: boolean;
}