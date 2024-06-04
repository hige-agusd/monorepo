import { alias } from '../alias';

const { newColors } = alias;

export const tabsTokens = {
  underlined: {
    backgroundColor: newColors.canvas,
  },
  backgroundColor: newColors.canvas,
  label: {
    color: newColors.textPrimary,
  },
  icon: {
    color: newColors.iconPrimary,
  },
  hover: {
    backgroundColor: newColors.canvasHover,
    borderColor: newColors.borderDark,
  },
  selected: {
    backgroundColor: newColors.background,
    borderColor: newColors.buttonPrimary,
    label: {
      color: newColors.buttonPrimary,
    },
    icon: {
      color: newColors.buttonPrimary,
    },
  },
  focus: {
    borderColor: newColors.focus,
  },
  disabled: {
    label: {
      color: newColors.textDisabled,
    },
    icon: {
      color: newColors.iconDisabled,
    },
  },
};
