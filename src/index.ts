export type PageType = 'main' | 'work-history' | 'portfolio' | 'commissions';

export const Theme = {
  Light: 'light',
  Dark: 'dark'
};
export function isTheme(theme: string): boolean {
  return Object.values(Theme).includes(theme);
}

export const Breakpoints = {
  Mobile: '700px'
};

export type Artwork = {
  title: string;
  medium: string;
  size: string;
  description: string;
  imageIds: string[];
}

export const COMMISSIONS_OPEN = true;
