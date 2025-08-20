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
  year: string;
  medium: string;
  size: string;
  description: string;
  imageIds: string[];
}

// JS modulo is actually *remainder*, which uses the sign of the dividend, not the divisor
export function modulo(n: number, d: number): number {
  return ((n % d) + d) % d;
}

export function getFullImage(imageId: string) {
  return `/gallery/full/${imageId}.jpg`;
}

export function getThumbnail(imageId: string) {
  return `/gallery/thumbnails/${imageId}.jpg`;
}

export const COMMISSIONS_OPEN = true;
