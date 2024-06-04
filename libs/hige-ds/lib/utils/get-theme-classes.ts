import { themeLight } from '../themes';

export const getThemeClasses = (themeName?: string) => {
  switch (themeName) {
    default:
      return themeLight;
  }
};
