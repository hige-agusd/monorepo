export const fontSize = {
  displayLarge: '40px',
  displayMedium: '36px',
  displaySmall: '32px',
  h1: '28px',
  h1Mobile: 'unset',
  h2: '24px',
  h2Mobile: 'unset',
  h3: '20px',
  bodyLarge: 'unset',
  body: '16px',
  bodyMedium: 'unset',
  bodySmall: '14px',
  caption: '12px',
  overline: '10px',
} as const;
export type FontSize = keyof typeof fontSize;
export type BodyFontSize = Extract<FontSize, 'body' | 'bodySmall' | 'caption' | 'overline'>;

export const fontWeight = {
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  black: '900',
};

export const lineHeight = {
  small: '1.3',
  medium: '1.4',
  large: '1.5',
};
