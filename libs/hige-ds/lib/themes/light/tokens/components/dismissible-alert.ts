import { alias } from '../alias';

const { newColors } = alias;

export const dismissibleAlertTokens = {
  closeIcon: { color: 'unset' },
  info: {
    color: newColors.textInfo,
    iconColor: newColors.iconInfo,
    backgroundColor: newColors.alertInfo,
    progressBarColor: newColors.alertBorderInfo,
  },
  warning: {
    color: newColors.textWarning,
    iconColor: newColors.iconWarning,
    backgroundColor: newColors.alertWarning,
    progressBarColor: newColors.alertBorderWarning,
  },
  success: {
    color: newColors.textSuccess,
    iconColor: newColors.iconSuccess,
    backgroundColor: newColors.alertSuccess,
    progressBarColor: newColors.alertBorderSuccess,
  },
  error: {
    color: newColors.textDanger,
    iconColor: newColors.iconDanger,
    backgroundColor: newColors.alertDanger,
    progressBarColor: newColors.alertBorderDanger,
  },
};
