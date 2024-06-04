import { alias } from '../alias';

const { newColors, colors } = alias;

export const iconButtonTokens = {
  color: newColors.textPrimary,
  backgroundColor: colors.transparent,
  borderColor: colors.transparent,
  borderWidth: '1px',
  active: {
    color: newColors.textInverse,
    backgroundColor: newColors.focus,
    borderColor: newColors.focus,
  },
  hover: {
    color: newColors.textActive,
    backgroundColor: newColors.canvasSelected,
    borderColor: colors.transparent,
  },
  focus: {
    color: newColors.textActive,
    backgroundColor: newColors.canvasSelected,
    borderColor: newColors.focus,
  },
  disabled: {
    color: newColors.textDisabled,
    backgroundColor: colors.transparent,
    borderColor: colors.transparent,
  },
  size: {
    XS: '16px',
    S: '20px',
    M: '24px',
    L: '32px',
  },
};
