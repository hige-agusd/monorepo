import { alias } from '../alias';

const { newColors } = alias;

export const buttonTokens = {
  primary: {
    backgroundColor: newColors.buttonPrimary,
    border: newColors.buttonPrimary,
    color: newColors.textOnColor,
    iconColor: newColors.iconOnColor,
    hover: {
      backgroundColor: newColors.buttonPrimaryHover,
      border: newColors.buttonPrimaryHover,
    },
    focus: {
      backgroundColor: newColors.buttonPrimary,
      border: newColors.buttonPrimary,
    },
    disabled: {
      backgroundColor: newColors.buttonDisabled,
      border: newColors.buttonDisabled,
      color: newColors.textDisabled,
      iconColor: newColors.iconDisabled,
    },
    active: {
      backgroundColor: newColors.buttonPrimaryActive,
      border: newColors.buttonPrimaryActive,
    },
    // variants
    status: {
      success: {
        backgroundColor: newColors.buttonSuccess,
        border: newColors.buttonSuccess,
        color: newColors.textOnColor,
        iconColor: newColors.iconOnColor,

        hover: {
          backgroundColor: newColors.buttonSuccessHover,
          border: newColors.buttonSuccessHover,
        },
        focus: {
          backgroundColor: newColors.buttonSuccess,
          border: newColors.focusInset,
        },
        disabled: {
          backgroundColor: newColors.buttonDisabled,
          border: newColors.buttonDisabled,
          color: newColors.textDisabled,
          iconColor: newColors.iconDisabled,
        },
        active: {
          backgroundColor: newColors.buttonSuccessActive,
          border: newColors.buttonSuccessActive,
        },
      },
      info: {
        backgroundColor: newColors.buttonInfo,
        border: newColors.buttonInfo,
        color: newColors.textOnColor,
        iconColor: newColors.iconOnColor,

        hover: {
          backgroundColor: newColors.buttonInfoHover,
          border: newColors.buttonInfoHover,
        },
        focus: {
          backgroundColor: newColors.buttonInfoHover,
          border: newColors.focusInset,
        },
        disabled: {
          backgroundColor: newColors.buttonDisabled,
          border: newColors.buttonDisabled,
          color: newColors.textDisabled,
          iconColor: newColors.iconDisabled,
        },
        active: {
          backgroundColor: newColors.buttonInfoActive,
          border: newColors.buttonInfoActive,
        },
      },
      warning: {
        backgroundColor: newColors.buttonWarning,
        border: newColors.buttonWarning,
        color: newColors.textOnColor,
        iconColor: newColors.iconOnColor,

        hover: {
          backgroundColor: newColors.buttonWarningHover,
          border: newColors.buttonWarningHover,
        },
        focus: {
          backgroundColor: newColors.buttonWarning,
          border: newColors.focusInset,
        },
        disabled: {
          backgroundColor: newColors.buttonDisabled,
          border: newColors.buttonDisabled,
          color: newColors.textDisabled,
          iconColor: newColors.iconDisabled,
        },
        active: {
          backgroundColor: newColors.buttonWarningActive,
          border: newColors.buttonWarningActive,
        },
      },
      danger: {
        backgroundColor: newColors.buttonDanger,
        border: newColors.buttonDanger,
        color: newColors.textOnColor,
        iconColor: newColors.iconOnColor,

        hover: {
          backgroundColor: newColors.buttonDangerHover,
          border: newColors.buttonDangerHover,
        },
        focus: {
          backgroundColor: newColors.buttonDanger,
          border: newColors.focusInset,
        },
        disabled: {
          backgroundColor: newColors.buttonDisabled,
          border: newColors.buttonDisabled,
          color: newColors.textDisabled,
          iconColor: newColors.iconDisabled,
        },
        active: {
          backgroundColor: newColors.buttonDangerActive,
          border: newColors.buttonDangerActive,
        },
      },
    },
  },
  secondary: {
    backgroundColor: alias.colors.transparent,
    border: newColors.buttonPrimary,
    color: newColors.buttonPrimary,
    iconColor: newColors.buttonPrimary,

    hover: {
      backgroundColor: newColors.backgroundHover,
      border: newColors.buttonPrimaryHover,
      color: newColors.buttonPrimaryHover,
      iconColor: newColors.buttonPrimaryHover,
    },
    focus: {
      backgroundColor: newColors.backgroundHover,
      border: newColors.buttonPrimary,
      color: newColors.buttonPrimary,
      iconColor: newColors.buttonPrimary,
    },
    disabled: {
      backgroundColor: alias.colors.transparent,
      border: newColors.textDisabled,
      color: newColors.textDisabled,
      iconColor: newColors.textDisabled,
    },
    active: {
      backgroundColor: newColors.backgroundActive,
      border: newColors.buttonPrimaryActive,
      color: newColors.buttonPrimaryActive,
      iconColor: newColors.buttonPrimaryActive,
    },
    // variants
    status: {
      success: {
        backgroundColor: alias.colors.transparent,
        border: newColors.buttonSuccess,
        color: newColors.buttonSuccess,
        iconColor: newColors.buttonSuccess,

        hover: {
          backgroundColor: newColors.backgroundSuccessHover,
          border: newColors.buttonSuccessHover,
          color: newColors.buttonSuccessHover,
          iconColor: newColors.buttonSuccessHover,
        },
        active: {
          backgroundColor: newColors.backgroundSuccessActive,
          border: newColors.buttonSuccessActive,
          color: newColors.buttonSuccessActive,
          iconColor: newColors.buttonSuccessActive,
        },
        focus: {
          color: newColors.buttonSuccess,
          iconColor: newColors.buttonSuccess,
          backgroundColor: newColors.backgroundSuccessHover,
          border: newColors.focus,
        },
        disabled: {
          backgroundColor: alias.colors.transparent,
          border: newColors.textDisabled,
          color: newColors.textDisabled,
          iconColor: newColors.iconDisabled,
        },
      },
      info: {
        backgroundColor: alias.colors.transparent,
        border: newColors.buttonInfo,
        color: newColors.buttonInfo,
        iconColor: newColors.buttonInfo,

        hover: {
          backgroundColor: newColors.backgroundInfoHover,
          border: newColors.buttonInfoHover,
          color: newColors.buttonInfoHover,
          iconColor: newColors.buttonInfoHover,
        },
        active: {
          backgroundColor: newColors.backgroundInfoActive,
          border: newColors.buttonInfoActive,
          color: newColors.buttonInfoActive,
          iconColor: newColors.buttonInfoActive,
        },
        focus: {
          color: newColors.buttonInfo,
          iconColor: newColors.buttonInfo,
          backgroundColor: newColors.backgroundInfoHover,
          border: newColors.focus,
        },
        disabled: {
          backgroundColor: alias.colors.transparent,
          border: newColors.textDisabled,
          color: newColors.textDisabled,
          iconColor: newColors.iconDisabled,
        },
      },
      warning: {
        backgroundColor: alias.colors.transparent,
        border: newColors.buttonWarning,
        color: newColors.buttonWarning,
        iconColor: newColors.buttonWarning,

        hover: {
          backgroundColor: newColors.backgroundWarningHover,
          border: newColors.buttonWarningHover,
          color: newColors.buttonWarningHover,
          iconColor: newColors.buttonWarningHover,
        },
        active: {
          backgroundColor: newColors.backgroundWarningActive,
          border: newColors.buttonWarningActive,
          color: newColors.buttonWarningActive,
          iconColor: newColors.buttonWarningActive,
        },
        focus: {
          color: newColors.buttonWarning,
          iconColor: newColors.buttonWarning,
          backgroundColor: newColors.backgroundWarningHover,
          border: newColors.focus,
        },
        disabled: {
          backgroundColor: alias.colors.transparent,
          border: newColors.textDisabled,
          color: newColors.textDisabled,
          iconColor: newColors.iconDisabled,
        },
      },
      danger: {
        backgroundColor: alias.colors.transparent,
        border: newColors.buttonDanger,
        color: newColors.buttonDanger,
        iconColor: newColors.buttonDanger,

        hover: {
          backgroundColor: newColors.backgroundDangerHover,
          border: newColors.buttonDangerHover,
          color: newColors.buttonDangerHover,
          iconColor: newColors.buttonDangerHover,
        },
        active: {
          backgroundColor: newColors.backgroundDangerActive,
          border: newColors.buttonDangerActive,
          color: newColors.buttonDangerActive,
          iconColor: newColors.buttonDangerActive,
        },
        focus: {
          color: newColors.buttonDanger,
          iconColor: newColors.buttonDanger,
          backgroundColor: newColors.backgroundDangerHover,
          border: newColors.focus,
        },
        disabled: {
          backgroundColor: alias.colors.transparent,
          border: newColors.textDisabled,
          color: newColors.textDisabled,
          iconColor: newColors.iconDisabled,
        },
      },
    },
  },
  tertiary: {
    backgroundColor: alias.colors.transparent,
    border: alias.colors.transparent,
    color: newColors.buttonPrimary,
    iconColor: newColors.buttonPrimary,

    hover: {
      backgroundColor: newColors.backgroundHover,
      border: alias.colors.transparent,
      color: newColors.buttonPrimaryHover,
      iconColor: newColors.buttonPrimaryHover,
    },
    focus: {
      backgroundColor: newColors.backgroundHover,
      border: newColors.buttonPrimary,
      color: newColors.buttonPrimary,
      iconColor: newColors.buttonPrimary,
    },
    disabled: {
      backgroundColor: alias.colors.transparent,
      border: alias.colors.transparent,
      color: newColors.textDisabled,
      iconColor: newColors.iconDisabled,
    },
    active: {
      backgroundColor: newColors.backgroundActive,
      border: newColors.buttonPrimaryActive,
      color: newColors.buttonPrimaryActive,
      iconColor: newColors.buttonPrimaryActive,
    },
    //variants
    status: {
      success: {
        backgroundColor: alias.colors.transparent,
        border: alias.colors.transparent,
        color: newColors.buttonSuccess,
        iconColor: newColors.buttonSuccess,

        hover: {
          backgroundColor: newColors.backgroundSuccessHover,
          border: alias.colors.transparent,
          color: newColors.buttonSuccessHover,
          iconColor: newColors.buttonSuccessHover,
        },
        focus: {
          backgroundColor: newColors.backgroundSuccessHover,
          border: newColors.focus,
          color: newColors.buttonSuccess,
          iconColor: newColors.buttonSuccess,
        },
        disabled: {
          backgroundColor: alias.colors.transparent,
          border: alias.colors.transparent,
          color: newColors.textDisabled,
          iconColor: newColors.iconDisabled,
        },
        active: {
          backgroundColor: newColors.backgroundSuccessActive,
          border: alias.colors.transparent,
          color: newColors.buttonSuccessActive,
          iconColor: newColors.buttonSuccessActive,
        },
      },
      info: {
        backgroundColor: alias.colors.transparent,
        border: alias.colors.transparent,
        color: newColors.buttonInfo,
        iconColor: newColors.buttonInfo,

        hover: {
          backgroundColor: newColors.backgroundInfoHover,
          border: alias.colors.transparent,
          color: newColors.buttonInfoHover,
          iconColor: newColors.buttonInfoHover,
        },
        focus: {
          backgroundColor: newColors.backgroundInfoHover,
          border: newColors.focus,
          color: newColors.buttonInfo,
          iconColor: newColors.buttonInfo,
        },
        disabled: {
          backgroundColor: alias.colors.transparent,
          border: alias.colors.transparent,
          color: newColors.textDisabled,
          iconColor: newColors.iconDisabled,
        },
        active: {
          backgroundColor: newColors.backgroundInfoActive,
          border: alias.colors.transparent,
          color: newColors.buttonInfoActive,
          iconColor: newColors.buttonInfoActive,
        },
      },
      warning: {
        backgroundColor: alias.colors.transparent,
        border: alias.colors.transparent,
        color: newColors.buttonWarning,
        iconColor: newColors.buttonWarning,

        hover: {
          backgroundColor: newColors.backgroundWarningHover,
          border: alias.colors.transparent,
          color: newColors.buttonWarningHover,
          iconColor: newColors.buttonWarningHover,
        },
        focus: {
          backgroundColor: newColors.backgroundWarningHover,
          border: newColors.focus,
          color: newColors.buttonWarning,
          iconColor: newColors.buttonWarning,
        },
        disabled: {
          backgroundColor: alias.colors.transparent,
          border: alias.colors.transparent,
          color: newColors.textDisabled,
          iconColor: newColors.iconDisabled,
        },
        active: {
          backgroundColor: newColors.backgroundWarningActive,
          border: alias.colors.transparent,
          color: newColors.buttonWarningActive,
          iconColor: newColors.buttonWarningActive,
        },
      },
      danger: {
        backgroundColor: alias.colors.transparent,
        border: alias.colors.transparent,
        color: newColors.buttonDanger,
        iconColor: newColors.buttonDanger,

        hover: {
          backgroundColor: newColors.backgroundDangerHover,
          border: alias.colors.transparent,
          color: newColors.buttonDangerHover,
          iconColor: newColors.buttonDangerHover,
        },
        focus: {
          backgroundColor: newColors.backgroundDangerHover,
          border: newColors.focus,
          color: newColors.buttonDanger,
          iconColor: newColors.buttonDanger,
        },
        disabled: {
          backgroundColor: alias.colors.transparent,
          border: alias.colors.transparent,
          color: newColors.textDisabled,
          iconColor: newColors.iconDisabled,
        },
        active: {
          backgroundColor: newColors.backgroundDangerActive,
          border: alias.colors.transparent,
          color: newColors.buttonDangerActive,
          iconColor: newColors.buttonDangerActive,
        },
      },
    },
  },
  borderRadiusSize: '8px',
};
