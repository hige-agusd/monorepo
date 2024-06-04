import { alias } from '../alias';

const { newColors } = alias;

export const datePickerTokens = {
  weekdays: {
    color: newColors.textSecondary,
  },
  dateItems: {
    backgroundColor: newColors.canvas,
    color: newColors.textPrimary,
    hover: {
      backgroundColor: newColors.backgroundHover,
    },
    active: {
      backgroundColor: newColors.backgroundActive,
    },
    focus: {
      borderColor: newColors.focus,
    },
    selected: {
      backgroundColor: newColors.buttonPrimary,
      color: newColors.textOnColor,
      hover: {
        backgroundColor: newColors.buttonPrimaryHover,
      },
      active: {
        backgroundColor: newColors.buttonPrimaryActive,
      },
      focus: {
        borderColor: newColors.focusInset,
      },
    },
  },
};
