export type PageType = 'main' | 'work-history' | 'portfolio';

export const Theme = {
  Light: 'light',
  Dark: 'dark'
};
export function isTheme(theme: string): boolean {
  return Object.values(Theme).includes(theme);
}
