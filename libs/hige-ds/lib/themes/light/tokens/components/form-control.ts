import { alias } from '../alias';

const { newColors } = alias;

export const formControlTokens = {
  label: {
    color: newColors.textSecondary,
    iconColor: newColors.iconSecondary,
    active: { color: newColors.textActive, iconColor: newColors.iconActive },
    error: { color: newColors.textDanger, iconColor: newColors.iconDanger },
    disabled: { color: newColors.textDisabled, iconColor: newColors.iconDisabled },
    success: { color: newColors.textSuccess },
  },
  helperText: {
    color: newColors.textPrimary,
    error: { color: newColors.textDanger, iconColor: newColors.iconDanger },
    disabled: { color: newColors.textDisabled },
    success: { color: newColors.textSuccess },
  },
};
