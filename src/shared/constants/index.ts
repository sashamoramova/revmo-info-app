// ==========================================
// BREAKPOINTS & MEDIA QUERIES  
// ==========================================

export const BREAKPOINTS = {
  MOBILE: 375,    // 375x667
  TABLET: 744,    // 744x1133
  LAPTOP: 1200,   // 1200x702
  DESKTOP: 1440,  // 1440x720
  LARGE: 1920,    // 1920x940
} as const;

// Для JavaScript логики (useEffect, условные рендеры)
export const MEDIA_QUERIES = {
  mobile: `(max-width: 743px)`,
  tablet: `(min-width: 744px) and (max-width: 1199px)`,
  laptop: `(min-width: 1200px) and (max-width: 1439px)`,
  desktop: `(min-width: 1440px) and (max-width: 1919px)`,
  large: `(min-width: 1920px)`,
} as const;

// ==========================================
// API ENDPOINTS
// ==========================================

export const API_ENDPOINTS = {
  NAVIGATION: '/api/navigation',
  MAIN: '/api/main',
  SLIDER: '/api/slider',
} as const;

// ==========================================
// UI CONSTANTS
// ==========================================

export const SLIDER_SETTINGS = {
  AUTOPLAY_DELAY: 3000,
  SLIDES_PER_VIEW_MOBILE: 1,
  SLIDES_PER_VIEW_TABLET: 2,
  SLIDES_PER_VIEW_DESKTOP: 3,
  PAGINATION_BULLETS: true,
} as const;

export const ANIMATION_DURATION = {
  FAST: 200,
  MEDIUM: 300,
  SLOW: 500,
} as const;

// ==========================================
// SOCIAL NETWORKS & BUTTONS
// ==========================================

export const SOCIAL_TYPES = {
  VK: 'vk',
  TELEGRAM: 'telegram',
  DZEN: 'dzen',
  VK_VIDEO: 'vkVideo',
} as const;

export const BUTTON_TYPES = {
  IOS: 'ios',
  ANDROID: 'android',
  APK: 'apk',
} as const;

// ==========================================
// TYPESCRIPT TYPES
// ==========================================

export type BreakpointKey = keyof typeof BREAKPOINTS;
export type MediaQueryKey = keyof typeof MEDIA_QUERIES;
export type SocialType = keyof typeof SOCIAL_TYPES;
export type ButtonType = keyof typeof BUTTON_TYPES;