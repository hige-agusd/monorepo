import { alias } from '../alias';

const { newColors } = alias;

export const segmentedButtonTokens = {
  backgroundColor: newColors.background,
  borderColor: newColors.buttonPrimary,
  label: { color: newColors.buttonPrimary },
  icon: { color: newColors.buttonPrimary },
  hover: {
    backgroundColor: newColors.backgroundHover,
    borderColor: newColors.buttonPrimaryHover,
    label: { color: newColors.buttonPrimaryHover },
    icon: { color: newColors.buttonPrimaryHover },
  },
  active: {
    backgroundColor: newColors.backgroundActive,
    borderColor: newColors.buttonPrimaryActive,
    label: { color: newColors.buttonPrimaryActive },
    icon: { color: newColors.buttonPrimaryActive },
  },
  focus: {
    backgroundColor: newColors.backgroundHover,
    borderColor: newColors.focus,
  },
  disabled: {
    borderColor: newColors.textDisabled,
    label: { color: newColors.textDisabled },
    icon: { color: newColors.iconDisabled },
  },
  selected: {
    backgroundColor: newColors.buttonPrimary,
    label: { color: newColors.textOnColor },
    icon: { color: newColors.iconOnColor },
    hover: {
      backgroundColor: newColors.buttonPrimaryHover,
    },
    active: {
      backgroundColor: newColors.buttonPrimaryActive,
    },
    focus: {
      borderColor: newColors.focusInset,
    },
    disabled: {
      backgroundColor: newColors.buttonDisabled,
      label: { color: newColors.textDisabled },
      icon: { color: newColors.iconDisabled },
    },
  },
};
