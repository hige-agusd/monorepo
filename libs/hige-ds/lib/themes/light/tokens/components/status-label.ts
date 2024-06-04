import { alias } from '../alias';

const { newColors } = alias;

export const statusLabelTokens = {
  color: newColors.textPrimary,
  borderColor: newColors.borderDark,
  backgroundColor: newColors.indicator,

  info: {
    color: newColors.textInfo,
    backgroundColor: newColors.alertInfo,
    borderColor: newColors.alertBorderInfo,
  },
  success: {
    color: newColors.textSuccess,
    backgroundColor: newColors.alertSuccess,
    borderColor: newColors.alertBorderSuccess,
  },
  warning: {
    color: newColors.textWarning,
    backgroundColor: newColors.alertWarning,
    borderColor: newColors.alertBorderWarning,
  },
  danger: {
    color: newColors.textDanger,
    backgroundColor: newColors.alertDanger,
    borderColor: newColors.alertBorderDanger,
  },
};
