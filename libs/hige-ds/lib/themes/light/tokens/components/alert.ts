import { alias } from '../alias';

const { newColors } = alias;

export const alertTokens = {
  closeIcon: { color: newColors.iconPrimary },
  info: {
    color: newColors.textInfo,
    iconColor: newColors.iconInfo,
    backgroundColor: newColors.alertInfo,
  },
  warning: {
    color: newColors.textWarning,
    iconColor: newColors.iconWarning,
    backgroundColor: newColors.alertWarning,
  },
  success: {
    color: newColors.textSuccess,
    iconColor: newColors.iconSuccess,
    backgroundColor: newColors.alertSuccess,
  },
  error: {
    color: newColors.textDanger,
    iconColor: newColors.iconDanger,
    backgroundColor: newColors.alertDanger,
  },
};
