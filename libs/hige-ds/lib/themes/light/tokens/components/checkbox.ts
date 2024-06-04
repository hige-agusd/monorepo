import { alias } from '../alias';

const { newColors } = alias;
export const checkboxTokens = {
  groupLabelColor: newColors.textSecondary,
  labelColor: newColors.textPrimary,
  helperText: newColors.textPrimary, // TODO: remove?
  backgroundColor: newColors.background,
  borderColor: newColors.iconPrimary,
  hover: {
    backgroundColor: newColors.backgroundHover,
  },
  focus: {
    borderColor: newColors.focus,
  },
  selected: {
    iconColor: newColors.iconOnColor,
    backgroundColor: newColors.iconActive,
    disabled: {
      backgroundColor: newColors.iconDisabled,
    },
  },
  disabled: {
    labelColor: newColors.textDisabled,
    borderColor: newColors.iconDisabled,
  },
  error: {
    borderColor: newColors.iconDanger,
  },
};
