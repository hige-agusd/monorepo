import { alias } from '../alias';
import { palette } from '../global/palette';

const { newColors } = alias;

export const searchBarTokens = {
  prominentSecondary: {
    background: newColors.background,
    border: newColors.backgroundBrand,

    hoverFocus: {
      background: newColors.canvasHover,
      border: newColors.backgroundBrand,
      boxShadow: newColors.backgroundBrand,
    },
  },
  tertiary: {
    background: newColors.canvasHover,
    border: palette['gray-700'],

    hoverFocus: {
      background: newColors.canvasHover,
      border: palette['gray-700'],
    },
  },
};
