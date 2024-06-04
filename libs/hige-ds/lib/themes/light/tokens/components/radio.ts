import { alias } from '../alias';

const { newColors } = alias;

export const radioTokens = {
  color: newColors.textPrimary,
  backgroundColor: newColors.background,
  borderColor: newColors.iconPrimary,
  hover: {
    backgroundColor: newColors.backgroundHover,
  },
  focus: {
    borderColor: newColors.focus,
  },
  selected: {
    color: newColors.iconActive,
    borderColor: newColors.iconActive,
  },
  disabled: {
    color: newColors.textDisabled,
    icon: { color: newColors.iconDisabled },
    borderColor: newColors.iconDisabled,
  },
  error: {
    borderColor: newColors.iconDanger,
  },
};
