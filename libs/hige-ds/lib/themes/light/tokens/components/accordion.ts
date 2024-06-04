import { alias } from '../alias';

const { newColors, colors } = alias;

export const accordionTokens = {
  triggerBackground: newColors.background,
  contentBackground: colors.transparent,
  contentText: newColors.textPrimary,
  default: {
    borderBottomColor: newColors.borderLight,
    labelColor: newColors.textPrimary,
    rightSideContentColor: newColors.textPrimary,
    iconColor: newColors.iconBrand,
    backgroundColor: colors.transparent,
  },
  active: {
    backgroundColor: newColors.canvasSelected,
    labelColor: newColors.textActive,
    iconColor: newColors.textActive,
  },
  focus: {
    backgroundColor: newColors.canvasSelected,
    borderColor: newColors.focus,
    labelColor: newColors.textActive,
    iconColor: newColors.textActive,
  },
  disabled: {
    labelColor: newColors.textDisabled,
    rightSideContentColor: newColors.textDisabled,
    iconColor: newColors.textDisabled,
  },
  card: {
    default: {
      labelColor: newColors.buttonPrimary,
      iconColor: newColors.iconBrand,
      backgroundColor: newColors.canvas,
      borderBottomColor: newColors.borderLight,
    },
    hover: {
      labelColor: newColors.buttonPrimaryHover,
    },
    active: {
      labelColor: newColors.buttonPrimaryActive,
      backgroundColor: newColors.canvasActive,
    },
    focus: {
      borderColor: newColors.focus,
    },
    disabled: {
      labelColor: newColors.textDisabled,
      iconColor: newColors.textDisabled,
    },
  },
};
