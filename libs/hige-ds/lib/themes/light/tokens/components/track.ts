import { alias } from '../alias';
import { fontSize, space } from '../global/layout';

const { colors, newColors } = alias;

export const trackTokens = {
  colors: {
    disabled: {
      backgroundColor: colors.transparent,
      color: colors.transparent,
      labelColor: newColors.textDisabled,
      descriptionColor: newColors.textDisabled,
    },
    complete: {
      backgroundColor: newColors.iconBrand,
      color: newColors.textOnColor,
      lineColor: newColors.iconBrand,
      labelColor: newColors.iconBrand,
      descriptionColor: newColors.iconBrand,
    },
    current: {
      backgroundColor: newColors.iconBrand,
      color: newColors.textOnColor,
      labelColor: newColors.iconBrand,
      descriptionColor: newColors.iconBrand,
    },
    pending: {
      backgroundColor: colors.backgroundColor,
      color: newColors.textPrimary,
      lineColor: newColors.textDisabled,
      labelColor: newColors.textPrimary,
      descriptionColor: newColors.textPrimary,
    },
  },
  layout: {
    base: {
      width: space.spacing32,
      height: space.spacing32,
      margin: space.spacing4,
      outlineOffset: '-2px',
      fontSize: fontSize.body,
      lineThickness: '1px',
      descriptionMargin: space.spacing16,
    },
    small: {
      width: space.spacing24,
      height: space.spacing24,
      margin: space.spacing8,
      outlineOffset: '-2px',
      fontSize: fontSize.body,
      descriptionMargin: space.spacing16,
    },
    current: {
      outline: '1px solid white',
      outlineColor: colors.white,
    },
  },
};
