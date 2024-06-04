import { alias } from '../alias';

const { newColors } = alias;
export const dropdownTokens = {
  color: newColors.textSecondary,
  divider: newColors.borderLight,
  placeholderColor: newColors.textPlaceholder,
  tone: {
    light: {
      borderColor: newColors.field,
      backgroundColor: newColors.field,
    },
    white: {
      borderColor: newColors.fieldOther,
      backgroundColor: newColors.fieldOther,
    },
  },
  tooltipIconColor: newColors.iconSecondary,
  leadIconColor: newColors.iconPrimary,
  endIconColor: newColors.iconPrimary,
  downArrow: newColors.iconPrimary,
  hover: {
    borderColor: newColors.borderDark,
    outlineWidth: '1px',
  },
  active: {
    borderColor: newColors.borderActive,
    downArrow: newColors.iconActive,
  },
  focus: {
    borderColor: newColors.focus,
  },
  error: {
    borderColor: newColors.borderDanger,
    leadIconColor: newColors.iconDanger,
  },
  disabled: {
    backgroundColor: newColors.buttonDisabled, // TODO: change when confirmed
    color: newColors.textDisabled,
    leadIconColor: newColors.iconDisabled,
    endIconColor: newColors.iconDisabled,
    downArrow: newColors.iconDisabled,
  },
};
