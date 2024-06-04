import { alias } from '../alias';
import { fontSize } from '../global';

const { newColors, colors } = alias;

export const inputTokens = {
  fontSize: fontSize.bodySmall,
  color: newColors.textPrimary,
  placeholderColor: newColors.textPlaceholder,
  leadIcon: newColors.iconPrimary,
  clearIcon: newColors.iconPrimary,
  endIcon: newColors.iconPrimary,
  borderColor: colors.normal,
  light: {
    backgroundColor: newColors.field,
  },
  white: {
    backgroundColor: newColors.fieldOther,
  },
  hover: {
    borderColor: colors.normal,
    outlineWidth: '1px',
  },
  active: {
    borderColor: newColors.borderActive,
    leadIcon: newColors.iconActive,
    endIcon: newColors.iconActive,
  },
  error: {
    borderColor: newColors.borderDanger,
    leadIcon: newColors.iconDanger,
  },
  disabled: {
    backgroundColor: newColors.fieldDisabled,
    borderColor: newColors.fieldDisabled,
    color: newColors.textDisabled,
    leadIcon: newColors.iconPrimary,
    clearIcon: newColors.iconPrimary,
    endIcon: newColors.iconPrimary,
  },
};
