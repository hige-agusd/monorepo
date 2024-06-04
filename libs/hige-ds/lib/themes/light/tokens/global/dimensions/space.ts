/**
 * Spacing uses a unit that associates with pixels to communicate easily between UI, UX, and designer teams.
 * The spacing is scalable, meaning it uses rem to define it.
 * Note: This list uses font size: 100%, not 62.5%, which will be defined as the location of the variable for migration purposes.
 * {@link https://www.figma.com/file/48T9Izjdq6dWyJPG7sQI8r/Styles?node-id=2%3A21&t=UqKF4Q8LceJPhKIH-0}
 */
export const space = {
  none: '0',
  spacing2: '0.125rem',
  spacing4: '0.25rem',
  spacing8: '0.5rem',
  spacing12: '0.75rem',
  spacing16: '1rem',
  spacing20: '1.25rem',
  spacing24: '1.5rem',
  spacing28: '1.75rem',
  spacing32: '2rem',
  spacing36: '2.25rem',
  spacing40: '2.5rem',
  spacing44: '2.75rem',
  spacing48: '3rem',
  spacing52: '3.25rem',
  spacing56: '3.5rem',
  spacing64: '4rem',
  spacing72: '4.5rem',
  spacing80: '5rem',
  spacing88: '5.5rem',
  spacing96: '6rem',
  spacing104: '6.5rem',
  spacing112: '7rem',
  spacing120: '7.5rem',
} as const;
export type Space = keyof typeof space;
