import { alias } from '../alias';

const DIALOG_TYPOGRAPHY_COLOR = '#4D4D4D';
const DIALOG_HEADER_BACKGROUND_COLOR = '#F7F7F7';
const DIALOG_HEADER_SUBTITLE_COLOR = '#767676';
const CLOSE_ICON_COLOR = '#000000';
const HOVER_CLOSE_ICON_BACKGROUND_COLOR = '#0000000D';
const ACTIVE_CLOSE_ICON_BACKGROUND_COLOR = '#0000001A';
const FOCUS_CLOSE_ICON_BACKGROUND_COLOR = '#0000001A';
const FOCUS_CLOSE_ICON_BORDER_COLOR = '#4D4D4D';
const DISABLED_CLOSE_ICON_COLOR = '#D1D1D1';

const { newColors, colors } = alias;

export const dialogTokens = {
  color: DIALOG_TYPOGRAPHY_COLOR,
  backgroundColor: colors.white,
  borderRadius: '0.25rem',
  header: {
    backgroundColor: DIALOG_HEADER_BACKGROUND_COLOR,
    subtitleColor: DIALOG_HEADER_SUBTITLE_COLOR,
    close: {
      color: CLOSE_ICON_COLOR,
      hover: {
        backgroundColor: HOVER_CLOSE_ICON_BACKGROUND_COLOR,
        borderRadius: '0.25rem',
      },
      active: {
        backgroundColor: ACTIVE_CLOSE_ICON_BACKGROUND_COLOR,
        borderRadius: '0.25rem',
      },
      focus: {
        backgroundColor: FOCUS_CLOSE_ICON_BACKGROUND_COLOR,
        borderRadius: '0.25rem',
        borderColor: FOCUS_CLOSE_ICON_BORDER_COLOR,
      },
      disabled: {
        color: DISABLED_CLOSE_ICON_COLOR,
      },
    },
    brand: {
      color: newColors.textOnColor,
      backgroundColor: newColors.buttonPrimary,
      subtitleColor: DIALOG_HEADER_SUBTITLE_COLOR,
      close: {
        color: newColors.iconOnColor,
        focus: {
          borderColor: newColors.iconOnColor,
        },
      },
    },
  },
};
