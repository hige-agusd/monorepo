import { alias } from '../alias';

const { newColors, colors } = alias;

export const navigationTokens = {
  backgroundColor: colors.transparent,
  borderColor: colors.transparent,
  color: newColors.textPrimary,

  active: {
    backgroundColor: newColors.canvasSelected,
    borderColor: newColors.focus,
    color: newColors.textActive,
  },
  hover: {
    backgroundColor: newColors.canvasSelected,
    borderColor: colors.transparent,
    color: newColors.textActive,
  },
  focus: {
    backgroundColor: newColors.canvasSelected,
    borderColor: newColors.focus,
    color: newColors.textActive,
  },
  disabled: {
    backgroundColor: colors.transparent,
    borderColor: colors.transparent,
    color: newColors.textDisabled,
  },
  selected: {
    backgroundColor: newColors.focus,
    borderColor: newColors.focus,
    color: newColors.textInverse,
  },
};
