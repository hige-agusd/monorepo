// styles.css.ts

import { vars, atoms } from '../../themes';
import { keyframes, style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { transparentize } from 'polished';

const noBorderValue = 'none !important';
const noBorderRadiusValue = 'unset !important';
const { button: buttonTokens } = vars.components;

export const buttonBase = style([
  atoms({
    display: 'inlineFlex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    position: 'relative',
  }),
  {
    textDecoration: 'none',
    cursor: 'pointer',
    border: '1px solid transparent',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: transparentize(70, 'black'),
    ':hover': {
      textDecoration: 'none', // Reset tag selector page style
    },
    ':focus': {
      outline: 'none',
    },
    ':active': {
      boxShadow: `inset 2000px 0 0 0 ${transparentize(20, 'black')}`,
      outline: 'none',
    },
  },
]);

export const buttonBaseRecipe = recipe({
  base: buttonBase,
  variants: {
    block: {
      true: { width: '100%' },
    },
    disabled: {
      true: {
        textDecoration: 'none',
        pointerEvents: 'none',
        background: vars.color.disabledBackground,
        color: vars.color.disabledColor,
        borderColor: vars.color.disabledColor,
      },
    },
    noPadding: {
      true: atoms({ padding: 'none' }),
    },
    noBorder: {
      all: { border: noBorderValue, borderRadius: noBorderRadiusValue },
      right: {
        borderRight: noBorderValue,
        borderTopRightRadius: noBorderRadiusValue,
        borderBottomRightRadius: noBorderRadiusValue,
      },
      bottom: {
        borderBottom: noBorderValue,
        borderBottomLeftRadius: noBorderRadiusValue,
        borderBottomRightRadius: noBorderRadiusValue,
      },
      none: {},
    },
    shape: {
      default: {},
      pill: {
        borderRadius: '400px',
      },
      circle: {
        borderRadius: '100px',
      },
    },
  },
});

export const buttonOldRecipe = recipe({
  variants: {
    disabled: {
      true: atoms({
        color: 'disabledColor',
        background: 'disabledBackground',
      }),
    },
  },
});
export type ButtonVariants = Parameters<typeof buttonOldRecipe>[0];

export const buttonContentRecipe = recipe({
  variants: {
    prefixLabelPadding: {
      S: atoms({ paddingLeft: 'spacing2' }),
      M: atoms({ paddingLeft: 'spacing4' }),
      L: atoms({ paddingLeft: 'spacing8' }),
      none: atoms({ paddingLeft: 'none' }),
    },
    suffixLabelPadding: {
      S: atoms({ paddingRight: 'spacing2' }),
      M: atoms({ paddingRight: 'spacing4' }),
      L: atoms({ paddingRight: 'spacing8' }),
      none: atoms({ paddingRight: 'none' }),
    },
  },
});

export type ButtonTextVariants = Parameters<typeof buttonContentRecipe>[0];

export type ButtonBaseVariants = Parameters<typeof buttonBaseRecipe>[0];

const borderRadiusValue = buttonTokens.borderRadiusSize; // TODO: Use theme default
export const borderRadiusStyle = style({ borderRadius: borderRadiusValue }); // TODO: Use atoms and theme default
export const borderRadiusTopLeftStyle = style({
  borderTopLeftRadius: borderRadiusValue,
}); // TODO: Use atoms and theme default
export const borderRadiusTopRightStyle = style({
  borderTopRightRadius: borderRadiusValue,
}); // TODO: Use atoms and theme default
export const borderRadiusBottomLeftStyle = style({
  borderBottomLeftRadius: borderRadiusValue,
}); // TODO: Use atoms and theme default
export const borderRadiusBottomRightStyle = style({
  borderBottomRightRadius: borderRadiusValue,
}); // TODO: Use atoms and theme default

// Define shared label recipe
export const buttonLabelRecipe = recipe({
  variants: {
    labelSize: {
      S: style([{ lineHeight: '20px' }]),
      M: style([{ lineHeight: '20px' }]),
    },
    prefixIconSize: {
      S: style([{ width: '18px', height: '18px' }]),
      M: style([{ width: '18px', height: '18px' }]),
    },
  },
});

export const secondaryButtonFocusVisible = {
  backgroundColor: buttonTokens.secondary.focus.backgroundColor,
  outline: `2px solid ${buttonTokens.secondary.focus.border}`,
  outlineOffset: '-2px',
  borderColor: buttonTokens.secondary.focus.backgroundColor,
  color: buttonTokens.secondary.focus.color,
};

export const secondaryButtonFocusVisibleStyle = style(
  secondaryButtonFocusVisible
);

// Define primary button styles
export const primaryButtonStyle = recipe({
  base: {
    backgroundColor: buttonTokens.primary.backgroundColor,
    borderColor: buttonTokens.primary.border,

    selectors: {
      '&:hover': {
        backgroundColor: buttonTokens.primary.hover.backgroundColor,
        borderColor: buttonTokens.primary.hover.border,
      },
      '&:focus': {
        // Needed to override rex button focus
        backgroundColor: buttonTokens.primary.backgroundColor,
        borderColor: buttonTokens.primary.border,
        color: buttonTokens.primary.color,
        outlineStyle: 'none',
      },
      '&:focus-visible': {
        backgroundColor: buttonTokens.primary.focus.backgroundColor,
        borderColor: buttonTokens.primary.focus.backgroundColor,
        outlineWidth: '2px',
        outlineStyle: 'solid',
        outlineColor: buttonTokens.primary.focus.border,
        outlineOffset: '-4px',
      },
      '&:disabled': {
        backgroundColor: buttonTokens.primary.disabled.backgroundColor,
        borderColor: buttonTokens.primary.disabled.border,
        color: buttonTokens.primary.disabled.color,
      },
      '&:active': {
        backgroundColor: buttonTokens.primary.active.backgroundColor,
        borderColor: buttonTokens.primary.active.border,
        outline: 'none',
      },
    },
  },
  variants: {
    status: {
      success: {
        backgroundColor: buttonTokens.primary.status.success.backgroundColor,
        borderColor: buttonTokens.primary.status.success.border,
        color: buttonTokens.primary.status.success.color,

        selectors: {
          '&:hover': {
            backgroundColor:
              buttonTokens.primary.status.success.hover.backgroundColor,
            borderColor: buttonTokens.primary.status.success.hover.border,
          },
          '&:focus': {
            // Needed to override rex button focus
            backgroundColor: buttonTokens.primary.status.success.backgroundColor,
            borderColor: buttonTokens.primary.status.success.border,
            color: buttonTokens.primary.status.success.color,
          },
          '&:focus-visible': {
            backgroundColor:
              buttonTokens.primary.status.success.focus.backgroundColor,
            outlineColor: buttonTokens.primary.status.success.focus.border,
            borderColor: buttonTokens.primary.status.success.focus.backgroundColor,
          },
          '&:disabled': {
            backgroundColor:
              buttonTokens.primary.status.success.disabled.backgroundColor,
            borderColor: buttonTokens.primary.status.success.disabled.border,
            color: buttonTokens.primary.status.success.disabled.color,
          },
          '&:active': {
            backgroundColor:
              buttonTokens.primary.status.success.active.backgroundColor,
            borderColor: buttonTokens.primary.status.success.active.border,
            outline: 'none',
          },
        },
      },
      info: {
        backgroundColor: buttonTokens.primary.status.info.backgroundColor,
        borderColor: buttonTokens.primary.status.info.border,
        color: buttonTokens.primary.status.info.color,

        selectors: {
          '&:hover': {
            backgroundColor: buttonTokens.primary.status.info.hover.backgroundColor,
            borderColor: buttonTokens.primary.status.info.hover.border,
          },
          '&:focus': {
            // Needed to override rex button focus
            backgroundColor: buttonTokens.primary.status.info.backgroundColor,
            borderColor: buttonTokens.primary.status.info.border,
            color: buttonTokens.primary.status.info.color,
          },
          '&:focus-visible': {
            backgroundColor: buttonTokens.primary.status.info.focus.backgroundColor,
            outlineColor: buttonTokens.primary.status.info.focus.border,
            borderColor: buttonTokens.primary.status.info.focus.backgroundColor,
          },
          '&:disabled': {
            backgroundColor:
              buttonTokens.primary.status.info.disabled.backgroundColor,
            borderColor: buttonTokens.primary.status.info.disabled.border,
            color: buttonTokens.primary.status.info.disabled.color,
          },
          '&:active': {
            backgroundColor: buttonTokens.primary.status.info.active.backgroundColor,
            borderColor: buttonTokens.primary.status.info.active.border,
            outline: 'none',
          },
        },
      },
      warning: {
        backgroundColor: buttonTokens.primary.status.warning.backgroundColor,
        borderColor: buttonTokens.primary.status.warning.border,
        color: buttonTokens.primary.status.warning.color,

        selectors: {
          '&:hover': {
            backgroundColor:
              buttonTokens.primary.status.warning.hover.backgroundColor,
            borderColor: buttonTokens.primary.status.warning.hover.border,
          },
          '&:focus': {
            // Needed to override rex button focus
            backgroundColor: buttonTokens.primary.status.warning.backgroundColor,
            borderColor: buttonTokens.primary.status.warning.border,
            color: buttonTokens.primary.status.warning.color,
          },
          '&:focus-visible': {
            backgroundColor:
              buttonTokens.primary.status.warning.focus.backgroundColor,
            outlineColor: buttonTokens.primary.status.warning.focus.border,
            borderColor: buttonTokens.primary.status.warning.focus.backgroundColor,
          },
          '&:disabled': {
            backgroundColor:
              buttonTokens.primary.status.warning.disabled.backgroundColor,
            borderColor: buttonTokens.primary.status.warning.disabled.border,
            color: buttonTokens.primary.status.warning.disabled.color,
          },
          '&:active': {
            backgroundColor:
              buttonTokens.primary.status.warning.active.backgroundColor,
            borderColor: buttonTokens.primary.status.warning.active.border,
            outline: 'none',
          },
        },
      },
      danger: {
        backgroundColor: buttonTokens.primary.status.danger.backgroundColor,
        borderColor: buttonTokens.primary.status.danger.border,
        color: buttonTokens.primary.status.danger.color,

        selectors: {
          '&:hover': {
            backgroundColor:
              buttonTokens.primary.status.danger.hover.backgroundColor,
            borderColor: buttonTokens.primary.status.danger.hover.border,
          },
          '&:focus': {
            // Needed to override rex button focus
            backgroundColor: buttonTokens.primary.status.danger.backgroundColor,
            borderColor: buttonTokens.primary.status.danger.border,
            color: buttonTokens.primary.status.danger.color,
          },
          '&:focus-visible': {
            backgroundColor:
              buttonTokens.primary.status.danger.focus.backgroundColor,
            outlineColor: buttonTokens.primary.status.danger.focus.border,
            borderColor: buttonTokens.primary.status.danger.focus.backgroundColor,
          },
          '&:disabled': {
            backgroundColor:
              buttonTokens.primary.status.danger.disabled.backgroundColor,
            borderColor: buttonTokens.primary.status.danger.disabled.border,
            color: buttonTokens.primary.status.danger.disabled.color,
          },
          '&:active': {
            backgroundColor:
              buttonTokens.primary.status.danger.active.backgroundColor,
            borderColor: buttonTokens.primary.status.danger.active.border,
            outline: 'none',
          },
        },
      },
    },
  },
});

// Define secondary button styles
export const secondaryButtonStyle = recipe({
  base: {
    backgroundColor: buttonTokens.secondary.backgroundColor,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: buttonTokens.secondary.border,
    color: buttonTokens.secondary.color,

    selectors: {
      '&:hover': {
        backgroundColor: buttonTokens.secondary.hover.backgroundColor,
        borderColor: buttonTokens.secondary.hover.border,
        color: buttonTokens.secondary.hover.color,
      },
      '&:focus': {
        // Needed to override rex button focus
        backgroundColor: buttonTokens.secondary.backgroundColor,
        borderColor: buttonTokens.secondary.border,
        color: buttonTokens.secondary.color,
        outlineStyle: 'none',
      },
      '&:focus-visible': secondaryButtonFocusVisible,
      '&:disabled': {
        backgroundColor: buttonTokens.secondary.disabled.backgroundColor,
        borderColor: buttonTokens.secondary.disabled.border,
        color: buttonTokens.secondary.disabled.color,
      },
      '&:active': {
        backgroundColor: buttonTokens.secondary.active.backgroundColor,
        borderColor: buttonTokens.secondary.active.border,
        color: buttonTokens.secondary.active.color,
        outline: 'unset',
      },
    },
  },
  variants: {
    status: {
      success: {
        backgroundColor: buttonTokens.secondary.status.success.backgroundColor,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: buttonTokens.secondary.status.success.border,
        color: buttonTokens.secondary.status.success.color,

        selectors: {
          '&:hover': {
            backgroundColor:
              buttonTokens.secondary.status.success.hover.backgroundColor,
            borderColor: buttonTokens.secondary.status.success.hover.border,
            color: buttonTokens.secondary.status.success.hover.color,
          },
          '&:focus': {
            // Needed to override rex button focus
            backgroundColor: buttonTokens.secondary.status.success.backgroundColor,
            borderColor: buttonTokens.secondary.status.success.border,
            color: buttonTokens.secondary.status.success.color,
          },
          '&:focus-visible': {
            backgroundColor:
              buttonTokens.secondary.status.success.focus.backgroundColor,
            outline: `2px solid ${buttonTokens.secondary.status.success.focus.border}`,
            outlineOffset: '-2px',
            borderColor: buttonTokens.secondary.status.success.focus.backgroundColor,
            color: buttonTokens.secondary.status.success.focus.color,
          },
          '&:disabled': {
            backgroundColor:
              buttonTokens.secondary.status.success.disabled.backgroundColor,
            borderColor: buttonTokens.secondary.status.success.disabled.border,
            color: buttonTokens.secondary.status.success.disabled.color,
          },
          '&:active': {
            backgroundColor:
              buttonTokens.secondary.status.success.active.backgroundColor,
            borderColor: buttonTokens.secondary.status.success.active.border,
            color: buttonTokens.secondary.status.success.active.color,
            outline: 'unset',
          },
        },
      },
      info: {
        backgroundColor: buttonTokens.secondary.status.info.backgroundColor,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: buttonTokens.secondary.status.info.border,
        color: buttonTokens.secondary.status.info.color,

        selectors: {
          '&:hover': {
            backgroundColor:
              buttonTokens.secondary.status.info.hover.backgroundColor,
            borderColor: buttonTokens.secondary.status.info.hover.border,
            color: buttonTokens.secondary.status.info.hover.color,
          },
          '&:focus': {
            // Needed to override rex button focus
            backgroundColor: buttonTokens.secondary.status.info.backgroundColor,
            borderColor: buttonTokens.secondary.status.info.border,
            color: buttonTokens.secondary.status.info.color,
          },
          '&:focus-visible': {
            backgroundColor:
              buttonTokens.secondary.status.info.focus.backgroundColor,
            outline: `2px solid ${buttonTokens.secondary.status.info.focus.border}`,
            outlineOffset: '-2px',
            borderColor: buttonTokens.secondary.status.info.focus.backgroundColor,
            color: buttonTokens.secondary.status.info.focus.color,
          },
          '&:disabled': {
            backgroundColor:
              buttonTokens.secondary.status.info.disabled.backgroundColor,
            borderColor: buttonTokens.secondary.status.info.disabled.border,
            color: buttonTokens.secondary.status.info.disabled.color,
          },
          '&:active': {
            backgroundColor:
              buttonTokens.secondary.status.info.active.backgroundColor,
            borderColor: buttonTokens.secondary.status.info.active.border,
            color: buttonTokens.secondary.status.info.active.color,
            outline: 'unset',
          },
        },
      },
      warning: {
        backgroundColor: buttonTokens.secondary.status.warning.backgroundColor,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: buttonTokens.secondary.status.warning.border,
        color: buttonTokens.secondary.status.warning.color,

        selectors: {
          '&:hover': {
            backgroundColor:
              buttonTokens.secondary.status.warning.hover.backgroundColor,
            borderColor: buttonTokens.secondary.status.warning.hover.border,
            color: buttonTokens.secondary.status.warning.hover.color,
          },
          '&:focus': {
            // Needed to override rex button focus
            backgroundColor: buttonTokens.secondary.status.warning.backgroundColor,
            borderColor: buttonTokens.secondary.status.warning.border,
            color: buttonTokens.secondary.status.warning.color,
          },
          '&:focus-visible': {
            backgroundColor:
              buttonTokens.secondary.status.warning.focus.backgroundColor,
            outline: `2px solid ${buttonTokens.secondary.status.warning.focus.border}`,
            outlineOffset: '-2px',
            borderColor: buttonTokens.secondary.status.warning.focus.backgroundColor,
            color: buttonTokens.secondary.status.warning.focus.color,
          },
          '&:disabled': {
            backgroundColor:
              buttonTokens.secondary.status.warning.disabled.backgroundColor,
            borderColor: buttonTokens.secondary.status.warning.disabled.border,
            color: buttonTokens.secondary.status.warning.disabled.color,
          },
          '&:active': {
            backgroundColor:
              buttonTokens.secondary.status.warning.active.backgroundColor,
            borderColor: buttonTokens.secondary.status.warning.active.border,
            color: buttonTokens.secondary.status.warning.active.color,
            outline: 'unset',
          },
        },
      },
      danger: {
        backgroundColor: buttonTokens.secondary.status.danger.backgroundColor,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: buttonTokens.secondary.status.danger.border,
        color: buttonTokens.secondary.status.danger.color,

        selectors: {
          '&:hover': {
            backgroundColor:
              buttonTokens.secondary.status.danger.hover.backgroundColor,
            borderColor: buttonTokens.secondary.status.danger.hover.border,
            color: buttonTokens.secondary.status.danger.hover.color,
          },
          '&:focus': {
            // Needed to override rex button focus
            backgroundColor: buttonTokens.secondary.status.danger.backgroundColor,
            borderColor: buttonTokens.secondary.status.danger.border,
            color: buttonTokens.secondary.status.danger.color,
          },
          '&:focus-visible': {
            backgroundColor:
              buttonTokens.secondary.status.danger.focus.backgroundColor,
            outline: `2px solid ${buttonTokens.secondary.status.danger.focus.border}`,
            outlineOffset: '-2px',
            borderColor: buttonTokens.secondary.status.danger.focus.backgroundColor,
            color: buttonTokens.secondary.status.danger.focus.color,
          },
          '&:disabled': {
            backgroundColor:
              buttonTokens.secondary.status.danger.disabled.backgroundColor,
            borderColor: buttonTokens.secondary.status.danger.disabled.border,
            color: buttonTokens.secondary.status.danger.disabled.color,
          },
          '&:active': {
            backgroundColor:
              buttonTokens.secondary.status.danger.active.backgroundColor,
            borderColor: buttonTokens.secondary.status.danger.active.border,
            color: buttonTokens.secondary.status.danger.active.color,
            outline: 'unset',
          },
        },
      },
    },
  },
});

// Define tertiary button styles
export const tertiaryButtonStyle = recipe({
  base: {
    backgroundColor: buttonTokens.tertiary.backgroundColor,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: buttonTokens.tertiary.border,
    color: buttonTokens.tertiary.color,

    selectors: {
      '&:hover': {
        backgroundColor: buttonTokens.tertiary.hover.backgroundColor,
        borderColor: buttonTokens.tertiary.hover.border,
        color: buttonTokens.tertiary.hover.color,
      },
      '&:focus': {
        // Needed to override rex button focus
        backgroundColor: buttonTokens.tertiary.backgroundColor,
        borderColor: buttonTokens.tertiary.border,
        color: buttonTokens.tertiary.color,
        outlineStyle: 'none',
      },
      '&:focus-visible': {
        backgroundColor: buttonTokens.tertiary.focus.backgroundColor,
        outline: `2px solid ${buttonTokens.tertiary.focus.border}`,
        outlineOffset: '-2px',
        borderColor: buttonTokens.tertiary.focus.backgroundColor,
        color: buttonTokens.tertiary.focus.color,
      },
      '&:disabled': {
        backgroundColor: buttonTokens.tertiary.disabled.backgroundColor,
        borderColor: buttonTokens.tertiary.disabled.border,
        color: buttonTokens.tertiary.disabled.color,
      },
      '&:active': {
        backgroundColor: buttonTokens.tertiary.active.backgroundColor,
        borderColor: buttonTokens.tertiary.active.border,
        color: buttonTokens.tertiary.active.color,
        outline: 'unset',
      },
    },
  },
  variants: {
    status: {
      success: {
        backgroundColor: buttonTokens.tertiary.status.success.backgroundColor,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: buttonTokens.tertiary.status.success.border,
        color: buttonTokens.tertiary.status.success.color,

        selectors: {
          '&:hover': {
            backgroundColor:
              buttonTokens.tertiary.status.success.hover.backgroundColor,
            borderColor: buttonTokens.tertiary.status.success.hover.border,
            color: buttonTokens.tertiary.status.success.hover.color,
          },
          '&:focus': {
            // Needed to override rex button focus
            backgroundColor: buttonTokens.tertiary.status.success.backgroundColor,
            borderColor: buttonTokens.tertiary.status.success.border,
            color: buttonTokens.tertiary.status.success.color,
          },
          '&:focus-visible': {
            backgroundColor:
              buttonTokens.tertiary.status.success.focus.backgroundColor,
            outline: `2px solid ${buttonTokens.tertiary.status.success.focus.border}`,
            outlineOffset: '-2px',
            borderColor: buttonTokens.tertiary.status.success.focus.backgroundColor,
            color: buttonTokens.tertiary.status.success.focus.color,
          },
          '&:disabled': {
            backgroundColor:
              buttonTokens.tertiary.status.success.disabled.backgroundColor,
            borderColor: buttonTokens.tertiary.status.success.disabled.border,
            color: buttonTokens.tertiary.status.success.disabled.color,
          },
          '&:active': {
            backgroundColor:
              buttonTokens.tertiary.status.success.active.backgroundColor,
            borderColor: buttonTokens.tertiary.status.success.active.border,
            color: buttonTokens.tertiary.status.success.active.color,
            outline: 'unset',
          },
        },
      },
      info: {
        backgroundColor: buttonTokens.tertiary.status.info.backgroundColor,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: buttonTokens.tertiary.status.info.border,
        color: buttonTokens.tertiary.status.info.color,

        selectors: {
          '&:hover': {
            backgroundColor: buttonTokens.tertiary.status.info.hover.backgroundColor,
            borderColor: buttonTokens.tertiary.status.info.hover.border,
            color: buttonTokens.tertiary.status.info.hover.color,
          },
          '&:focus': {
            // Needed to override rex button focus
            backgroundColor: buttonTokens.tertiary.status.info.backgroundColor,
            borderColor: buttonTokens.tertiary.status.info.border,
            color: buttonTokens.tertiary.status.info.color,
          },
          '&:focus-visible': {
            backgroundColor: buttonTokens.tertiary.status.info.focus.backgroundColor,
            outline: `2px solid ${buttonTokens.tertiary.status.info.focus.border}`,
            outlineOffset: '-2px',
            borderColor: buttonTokens.tertiary.status.info.focus.backgroundColor,
            color: buttonTokens.tertiary.status.info.focus.color,
          },
          '&:disabled': {
            backgroundColor:
              buttonTokens.tertiary.status.info.disabled.backgroundColor,
            borderColor: buttonTokens.tertiary.status.info.disabled.border,
            color: buttonTokens.tertiary.status.info.disabled.color,
          },
          '&:active': {
            backgroundColor:
              buttonTokens.tertiary.status.info.active.backgroundColor,
            borderColor: buttonTokens.tertiary.status.info.active.border,
            color: buttonTokens.tertiary.status.info.active.color,
            outline: 'unset',
          },
        },
      },
      warning: {
        backgroundColor: buttonTokens.tertiary.status.warning.backgroundColor,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: buttonTokens.tertiary.status.warning.border,
        color: buttonTokens.tertiary.status.warning.color,

        selectors: {
          '&:hover': {
            backgroundColor:
              buttonTokens.tertiary.status.warning.hover.backgroundColor,
            borderColor: buttonTokens.tertiary.status.warning.hover.border,
            color: buttonTokens.tertiary.status.warning.hover.color,
          },
          '&:focus': {
            // Needed to override rex button focus
            backgroundColor: buttonTokens.tertiary.status.warning.backgroundColor,
            borderColor: buttonTokens.tertiary.status.warning.border,
            color: buttonTokens.tertiary.status.warning.color,
          },
          '&:focus-visible': {
            backgroundColor:
              buttonTokens.tertiary.status.warning.focus.backgroundColor,
            outline: `2px solid ${buttonTokens.tertiary.status.warning.focus.border}`,
            outlineOffset: '-2px',
            borderColor: buttonTokens.tertiary.status.warning.focus.backgroundColor,
            color: buttonTokens.tertiary.status.warning.focus.color,
          },
          '&:disabled': {
            backgroundColor:
              buttonTokens.tertiary.status.warning.disabled.backgroundColor,
            borderColor: buttonTokens.tertiary.status.warning.disabled.border,
            color: buttonTokens.tertiary.status.warning.disabled.color,
          },
          '&:active': {
            backgroundColor:
              buttonTokens.tertiary.status.warning.active.backgroundColor,
            borderColor: buttonTokens.tertiary.status.warning.active.border,
            color: buttonTokens.tertiary.status.warning.active.color,
            outline: 'unset',
          },
        },
      },
      danger: {
        backgroundColor: buttonTokens.tertiary.status.danger.backgroundColor,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: buttonTokens.tertiary.status.danger.border,
        color: buttonTokens.tertiary.status.danger.color,

        selectors: {
          '&:hover': {
            backgroundColor:
              buttonTokens.tertiary.status.danger.hover.backgroundColor,
            borderColor: buttonTokens.tertiary.status.danger.hover.border,
            color: buttonTokens.tertiary.status.danger.hover.color,
          },
          '&:focus': {
            // Needed to override rex button focus
            backgroundColor: buttonTokens.tertiary.status.danger.backgroundColor,
            borderColor: buttonTokens.tertiary.status.danger.border,
            color: buttonTokens.tertiary.status.danger.color,
          },
          '&:focus-visible': {
            backgroundColor:
              buttonTokens.tertiary.status.danger.focus.backgroundColor,
            outline: `2px solid ${buttonTokens.tertiary.status.danger.focus.border}`,
            outlineOffset: '-2px',
            borderColor: buttonTokens.tertiary.status.danger.focus.backgroundColor,
            color: buttonTokens.tertiary.status.danger.focus.color,
          },
          '&:disabled': {
            backgroundColor:
              buttonTokens.tertiary.status.danger.disabled.backgroundColor,
            borderColor: buttonTokens.tertiary.status.danger.disabled.border,
            color: buttonTokens.tertiary.status.danger.disabled.color,
          },
          '&:active': {
            backgroundColor:
              buttonTokens.tertiary.status.danger.active.backgroundColor,
            borderColor: buttonTokens.tertiary.status.danger.active.border,
            color: buttonTokens.tertiary.status.danger.active.color,
            outline: 'unset',
          },
        },
      },
    },
  },
});

// Define focus visible style for secondary and tertiary buttons
export const focusVisibleStyle = style({
  outline: `2px solid ${buttonTokens.secondary.focus.border}`,
  outlineOffset: '-2px',
});

// Export button label variants type
export type ButtonLabelVariants = Parameters<typeof buttonLabelRecipe>[0];

export const loadingButton = style({
  backgroundColor: buttonTokens.primary.backgroundColor,
  borderColor: buttonTokens.primary.border,
  color: buttonTokens.primary.color,
  ':hover': {
    backgroundColor: buttonTokens.primary.backgroundColor,
    borderColor: buttonTokens.primary.border,
  },
  ':focus': {
    backgroundColor: buttonTokens.primary.backgroundColor,
    borderColor: buttonTokens.primary.border,
  },
  ':disabled': {
    backgroundColor: buttonTokens.primary.backgroundColor,
    borderColor: buttonTokens.primary.border,
    cursor: 'not-allowed',
  },
});

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const spinner = style([
  atoms({
    display: 'inlineBlock',
  }),
  {
    color: buttonTokens.primary.color,
    fill: buttonTokens.primary.color,
    fontSize: '1.5em',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    animation: `${spin} 0.5s linear infinite`,
  },
]);

const buttonPrimaryStyle = style({
  backgroundColor: buttonTokens.primary.backgroundColor,
  borderColor: buttonTokens.primary.border,
  color: buttonTokens.primary.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.primary.hover.backgroundColor,
      borderColor: buttonTokens.primary.hover.border,
      color: buttonTokens.primary.color,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.primary.backgroundColor,
      borderColor: buttonTokens.primary.border,
      color: buttonTokens.primary.color,
      outlineStyle: 'none',
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.primary.focus.backgroundColor,
      borderColor: buttonTokens.primary.focus.backgroundColor,
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineColor: buttonTokens.primary.focus.border,
      outlineOffset: '-4px',
      color: buttonTokens.primary.color,
    },
    '&:disabled': {
      backgroundColor: buttonTokens.primary.disabled.backgroundColor,
      borderColor: buttonTokens.primary.disabled.border,
      color: buttonTokens.primary.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.primary.active.backgroundColor,
      borderColor: buttonTokens.primary.active.border,
      outline: 'none',
      color: buttonTokens.primary.color,
    },
  },
});
const buttonSecondaryStyle = style({
  backgroundColor: buttonTokens.secondary.backgroundColor,
  borderColor: buttonTokens.secondary.border,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.secondary.hover.backgroundColor,
      borderColor: buttonTokens.secondary.hover.border,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.secondary.backgroundColor,
      borderColor: buttonTokens.secondary.border,
      color: buttonTokens.secondary.color,
      outlineStyle: 'none',
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.secondary.focus.backgroundColor,
      borderColor: buttonTokens.secondary.focus.backgroundColor,
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineColor: buttonTokens.secondary.focus.border,
      outlineOffset: '-4px',
    },
    '&:disabled': {
      backgroundColor: buttonTokens.secondary.disabled.backgroundColor,
      borderColor: buttonTokens.secondary.disabled.border,
      color: buttonTokens.secondary.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.secondary.active.backgroundColor,
      borderColor: buttonTokens.secondary.active.border,
      outline: 'none',
    },
  },
});
const buttonTertiaryStyle = style({
  backgroundColor: buttonTokens.tertiary.backgroundColor,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: buttonTokens.tertiary.border,
  color: buttonTokens.tertiary.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.tertiary.hover.backgroundColor,
      borderColor: buttonTokens.tertiary.hover.border,
      color: buttonTokens.tertiary.hover.color,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.tertiary.backgroundColor,
      borderColor: buttonTokens.tertiary.border,
      color: buttonTokens.tertiary.color,
      outlineStyle: 'none',
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.tertiary.focus.backgroundColor,
      outline: `2px solid ${buttonTokens.tertiary.focus.border}`,
      outlineOffset: '-2px',
      borderColor: buttonTokens.tertiary.focus.backgroundColor,
      color: buttonTokens.tertiary.focus.color,
    },
    '&:disabled': {
      backgroundColor: buttonTokens.tertiary.disabled.backgroundColor,
      borderColor: buttonTokens.tertiary.disabled.border,
      color: buttonTokens.tertiary.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.tertiary.active.backgroundColor,
      borderColor: buttonTokens.tertiary.active.border,
      color: buttonTokens.tertiary.active.color,
      outline: 'unset',
    },
  },
});

const buttonPrimarySuccessStyle = style({
  backgroundColor: buttonTokens.primary.status.success.backgroundColor,
  borderColor: buttonTokens.primary.status.success.border,
  color: buttonTokens.primary.status.success.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.primary.status.success.hover.backgroundColor,
      borderColor: buttonTokens.primary.status.success.hover.border,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.primary.status.success.backgroundColor,
      borderColor: buttonTokens.primary.status.success.border,
      color: buttonTokens.primary.status.success.color,
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.primary.status.success.focus.backgroundColor,
      outlineColor: buttonTokens.primary.status.success.focus.border,
      borderColor: buttonTokens.primary.status.success.focus.backgroundColor,
    },
    '&:disabled': {
      backgroundColor: buttonTokens.primary.status.success.disabled.backgroundColor,
      borderColor: buttonTokens.primary.status.success.disabled.border,
      color: buttonTokens.primary.status.success.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.primary.status.success.active.backgroundColor,
      borderColor: buttonTokens.primary.status.success.active.border,
      outline: 'none',
    },
  },
});
const buttonPrimaryInfoStyle = style({
  backgroundColor: buttonTokens.primary.status.info.backgroundColor,
  borderColor: buttonTokens.primary.status.info.border,
  color: buttonTokens.primary.status.info.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.primary.status.info.hover.backgroundColor,
      borderColor: buttonTokens.primary.status.info.hover.border,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.primary.status.info.backgroundColor,
      borderColor: buttonTokens.primary.status.info.border,
      color: buttonTokens.primary.status.info.color,
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.primary.status.info.focus.backgroundColor,
      outlineColor: buttonTokens.primary.status.info.focus.border,
      borderColor: buttonTokens.primary.status.info.focus.backgroundColor,
    },
    '&:disabled': {
      backgroundColor: buttonTokens.primary.status.info.disabled.backgroundColor,
      borderColor: buttonTokens.primary.status.info.disabled.border,
      color: buttonTokens.primary.status.info.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.primary.status.info.active.backgroundColor,
      borderColor: buttonTokens.primary.status.info.active.border,
      outline: 'none',
    },
  },
});
const buttonPrimaryWarningStyle = style({
  backgroundColor: buttonTokens.primary.status.warning.backgroundColor,
  borderColor: buttonTokens.primary.status.warning.border,
  color: buttonTokens.primary.status.warning.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.primary.status.warning.hover.backgroundColor,
      borderColor: buttonTokens.primary.status.warning.hover.border,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.primary.status.warning.backgroundColor,
      borderColor: buttonTokens.primary.status.warning.border,
      color: buttonTokens.primary.status.warning.color,
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.primary.status.warning.focus.backgroundColor,
      outlineColor: buttonTokens.primary.status.warning.focus.border,
      borderColor: buttonTokens.primary.status.warning.focus.backgroundColor,
    },
    '&:disabled': {
      backgroundColor: buttonTokens.primary.status.warning.disabled.backgroundColor,
      borderColor: buttonTokens.primary.status.warning.disabled.border,
      color: buttonTokens.primary.status.warning.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.primary.status.warning.active.backgroundColor,
      borderColor: buttonTokens.primary.status.warning.active.border,
      outline: 'none',
    },
  },
});
const buttonPrimaryDangerStyle = style({
  backgroundColor: buttonTokens.primary.status.danger.backgroundColor,
  borderColor: buttonTokens.primary.status.danger.border,
  color: buttonTokens.primary.status.danger.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.primary.status.danger.hover.backgroundColor,
      borderColor: buttonTokens.primary.status.danger.hover.border,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.primary.status.danger.backgroundColor,
      borderColor: buttonTokens.primary.status.danger.border,
      color: buttonTokens.primary.status.danger.color,
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.primary.status.danger.focus.backgroundColor,
      outlineColor: buttonTokens.primary.status.danger.focus.border,
      borderColor: buttonTokens.primary.status.danger.focus.backgroundColor,
    },
    '&:disabled': {
      backgroundColor: buttonTokens.primary.status.danger.disabled.backgroundColor,
      borderColor: buttonTokens.primary.status.danger.disabled.border,
      color: buttonTokens.primary.status.danger.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.primary.status.danger.active.backgroundColor,
      borderColor: buttonTokens.primary.status.danger.active.border,
      outline: 'none',
    },
  },
});

const buttonSecondarySuccessStyle = style({
  backgroundColor: buttonTokens.secondary.status.success.backgroundColor,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: buttonTokens.secondary.status.success.border,
  color: buttonTokens.secondary.status.success.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.secondary.status.success.hover.backgroundColor,
      borderColor: buttonTokens.secondary.status.success.hover.border,
      color: buttonTokens.secondary.status.success.hover.color,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.secondary.status.success.backgroundColor,
      borderColor: buttonTokens.secondary.status.success.border,
      color: buttonTokens.secondary.status.success.color,
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.secondary.status.success.focus.backgroundColor,
      outline: `2px solid ${buttonTokens.secondary.status.success.focus.border}`,
      outlineOffset: '-2px',
      borderColor: buttonTokens.secondary.status.success.focus.backgroundColor,
      color: buttonTokens.secondary.status.success.focus.color,
    },
    '&:disabled': {
      backgroundColor:
        buttonTokens.secondary.status.success.disabled.backgroundColor,
      borderColor: buttonTokens.secondary.status.success.disabled.border,
      color: buttonTokens.secondary.status.success.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.secondary.status.success.active.backgroundColor,
      borderColor: buttonTokens.secondary.status.success.active.border,
      color: buttonTokens.secondary.status.success.active.color,
      outline: 'unset',
    },
  },
});
const buttonSecondaryInfoStyle = style({
  backgroundColor: buttonTokens.secondary.status.info.backgroundColor,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: buttonTokens.secondary.status.info.border,
  color: buttonTokens.secondary.status.info.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.secondary.status.info.hover.backgroundColor,
      borderColor: buttonTokens.secondary.status.info.hover.border,
      color: buttonTokens.secondary.status.info.hover.color,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.secondary.status.info.backgroundColor,
      borderColor: buttonTokens.secondary.status.info.border,
      color: buttonTokens.secondary.status.info.color,
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.secondary.status.info.focus.backgroundColor,
      outline: `2px solid ${buttonTokens.secondary.status.info.focus.border}`,
      outlineOffset: '-2px',
      borderColor: buttonTokens.secondary.status.info.focus.backgroundColor,
      color: buttonTokens.secondary.status.info.focus.color,
    },
    '&:disabled': {
      backgroundColor: buttonTokens.secondary.status.info.disabled.backgroundColor,
      borderColor: buttonTokens.secondary.status.info.disabled.border,
      color: buttonTokens.secondary.status.info.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.secondary.status.info.active.backgroundColor,
      borderColor: buttonTokens.secondary.status.info.active.border,
      color: buttonTokens.secondary.status.info.active.color,
      outline: 'unset',
    },
  },
});
const buttonSecondaryWarningStyle = style({
  backgroundColor: buttonTokens.secondary.status.warning.backgroundColor,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: buttonTokens.secondary.status.warning.border,
  color: buttonTokens.secondary.status.warning.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.secondary.status.warning.hover.backgroundColor,
      borderColor: buttonTokens.secondary.status.warning.hover.border,
      color: buttonTokens.secondary.status.warning.hover.color,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.secondary.status.warning.backgroundColor,
      borderColor: buttonTokens.secondary.status.warning.border,
      color: buttonTokens.secondary.status.warning.color,
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.secondary.status.warning.focus.backgroundColor,
      outline: `2px solid ${buttonTokens.secondary.status.warning.focus.border}`,
      outlineOffset: '-2px',
      borderColor: buttonTokens.secondary.status.warning.focus.backgroundColor,
      color: buttonTokens.secondary.status.warning.focus.color,
    },
    '&:disabled': {
      backgroundColor:
        buttonTokens.secondary.status.warning.disabled.backgroundColor,
      borderColor: buttonTokens.secondary.status.warning.disabled.border,
      color: buttonTokens.secondary.status.warning.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.secondary.status.warning.active.backgroundColor,
      borderColor: buttonTokens.secondary.status.warning.active.border,
      color: buttonTokens.secondary.status.warning.active.color,
      outline: 'unset',
    },
  },
});
const buttonSecondaryDangerStyle = style({
  backgroundColor: buttonTokens.secondary.status.danger.backgroundColor,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: buttonTokens.secondary.status.danger.border,
  color: buttonTokens.secondary.status.danger.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.secondary.status.danger.hover.backgroundColor,
      borderColor: buttonTokens.secondary.status.danger.hover.border,
      color: buttonTokens.secondary.status.danger.hover.color,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.secondary.status.danger.backgroundColor,
      borderColor: buttonTokens.secondary.status.danger.border,
      color: buttonTokens.secondary.status.danger.color,
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.secondary.status.danger.focus.backgroundColor,
      outline: `2px solid ${buttonTokens.secondary.status.danger.focus.border}`,
      outlineOffset: '-2px',
      borderColor: buttonTokens.secondary.status.danger.focus.backgroundColor,
      color: buttonTokens.secondary.status.danger.focus.color,
    },
    '&:disabled': {
      backgroundColor: buttonTokens.secondary.status.danger.disabled.backgroundColor,
      borderColor: buttonTokens.secondary.status.danger.disabled.border,
      color: buttonTokens.secondary.status.danger.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.secondary.status.danger.active.backgroundColor,
      borderColor: buttonTokens.secondary.status.danger.active.border,
      color: buttonTokens.secondary.status.danger.active.color,
      outline: 'unset',
    },
  },
});

const buttonTertiarySuccessStyle = style({
  backgroundColor: buttonTokens.tertiary.status.success.backgroundColor,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: buttonTokens.tertiary.status.success.border,
  color: buttonTokens.tertiary.status.success.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.tertiary.status.success.hover.backgroundColor,
      borderColor: buttonTokens.tertiary.status.success.hover.border,
      color: buttonTokens.tertiary.status.success.hover.color,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.tertiary.status.success.backgroundColor,
      borderColor: buttonTokens.tertiary.status.success.border,
      color: buttonTokens.tertiary.status.success.color,
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.tertiary.status.success.focus.backgroundColor,
      outline: `2px solid ${buttonTokens.tertiary.status.success.focus.border}`,
      outlineOffset: '-2px',
      borderColor: buttonTokens.tertiary.status.success.focus.backgroundColor,
      color: buttonTokens.tertiary.status.success.focus.color,
    },
    '&:disabled': {
      backgroundColor: buttonTokens.tertiary.status.success.disabled.backgroundColor,
      borderColor: buttonTokens.tertiary.status.success.disabled.border,
      color: buttonTokens.tertiary.status.success.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.tertiary.status.success.active.backgroundColor,
      borderColor: buttonTokens.tertiary.status.success.active.border,
      color: buttonTokens.tertiary.status.success.active.color,
      outline: 'unset',
    },
  },
});
const buttonTertiaryInfoStyle = style({
  backgroundColor: buttonTokens.tertiary.status.info.backgroundColor,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: buttonTokens.tertiary.status.info.border,
  color: buttonTokens.tertiary.status.info.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.tertiary.status.info.hover.backgroundColor,
      borderColor: buttonTokens.tertiary.status.info.hover.border,
      color: buttonTokens.tertiary.status.info.hover.color,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.tertiary.status.info.backgroundColor,
      borderColor: buttonTokens.tertiary.status.info.border,
      color: buttonTokens.tertiary.status.info.color,
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.tertiary.status.info.focus.backgroundColor,
      outline: `2px solid ${buttonTokens.tertiary.status.info.focus.border}`,
      outlineOffset: '-2px',
      borderColor: buttonTokens.tertiary.status.info.focus.backgroundColor,
      color: buttonTokens.tertiary.status.info.focus.color,
    },
    '&:disabled': {
      backgroundColor: buttonTokens.tertiary.status.info.disabled.backgroundColor,
      borderColor: buttonTokens.tertiary.status.info.disabled.border,
      color: buttonTokens.tertiary.status.info.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.tertiary.status.info.active.backgroundColor,
      borderColor: buttonTokens.tertiary.status.info.active.border,
      color: buttonTokens.tertiary.status.info.active.color,
      outline: 'unset',
    },
  },
});
const buttonTertiaryWarningStyle = style({
  backgroundColor: buttonTokens.tertiary.status.warning.backgroundColor,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: buttonTokens.tertiary.status.warning.border,
  color: buttonTokens.tertiary.status.warning.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.tertiary.status.warning.hover.backgroundColor,
      borderColor: buttonTokens.tertiary.status.warning.hover.border,
      color: buttonTokens.tertiary.status.warning.hover.color,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.tertiary.status.warning.backgroundColor,
      borderColor: buttonTokens.tertiary.status.warning.border,
      color: buttonTokens.tertiary.status.warning.color,
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.tertiary.status.warning.focus.backgroundColor,
      outline: `2px solid ${buttonTokens.tertiary.status.warning.focus.border}`,
      outlineOffset: '-2px',
      borderColor: buttonTokens.tertiary.status.warning.focus.backgroundColor,
      color: buttonTokens.tertiary.status.warning.focus.color,
    },
    '&:disabled': {
      backgroundColor: buttonTokens.tertiary.status.warning.disabled.backgroundColor,
      borderColor: buttonTokens.tertiary.status.warning.disabled.border,
      color: buttonTokens.tertiary.status.warning.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.tertiary.status.warning.active.backgroundColor,
      borderColor: buttonTokens.tertiary.status.warning.active.border,
      color: buttonTokens.tertiary.status.warning.active.color,
      outline: 'unset',
    },
  },
});
const buttonTertiaryDangerStyle = style({
  backgroundColor: buttonTokens.tertiary.status.danger.backgroundColor,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: buttonTokens.tertiary.status.danger.border,
  color: buttonTokens.tertiary.status.danger.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.tertiary.status.danger.hover.backgroundColor,
      borderColor: buttonTokens.tertiary.status.danger.hover.border,
      color: buttonTokens.tertiary.status.danger.hover.color,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.tertiary.status.danger.backgroundColor,
      borderColor: buttonTokens.tertiary.status.danger.border,
      color: buttonTokens.tertiary.status.danger.color,
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.tertiary.status.danger.focus.backgroundColor,
      outline: `2px solid ${buttonTokens.tertiary.status.danger.focus.border}`,
      outlineOffset: '-2px',
      borderColor: buttonTokens.tertiary.status.danger.focus.backgroundColor,
      color: buttonTokens.tertiary.status.danger.focus.color,
    },
    '&:disabled': {
      backgroundColor: buttonTokens.tertiary.status.danger.disabled.backgroundColor,
      borderColor: buttonTokens.tertiary.status.danger.disabled.border,
      color: buttonTokens.tertiary.status.danger.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.tertiary.status.danger.active.backgroundColor,
      borderColor: buttonTokens.tertiary.status.danger.active.border,
      color: buttonTokens.tertiary.status.danger.active.color,
      outline: 'unset',
    },
  },
});

export const buttonRecipe = recipe({
  variants: {
    variant: {
      primary: buttonPrimaryStyle,
      secondary: buttonSecondaryStyle,
      tertiary: buttonTertiaryStyle,
    },
    status: {
      default: {},
      success: {},
      info: {},
      warning: {},
      danger: {},
    },
    paddingX: {
      none: style({
        paddingLeft: vars.space.none,
        paddingRight: vars.space.none,
      }),
      spacing2: style({
        paddingLeft: vars.space.spacing2,
        paddingRight: vars.space.spacing2,
      }),
      spacing4: style({
        paddingLeft: vars.space.spacing4,
        paddingRight: vars.space.spacing4,
      }),
      spacing8: style({
        paddingLeft: vars.space.spacing8,
        paddingRight: vars.space.spacing8,
      }),
      spacing12: style({
        paddingLeft: vars.space.spacing12,
        paddingRight: vars.space.spacing12,
      }),
      spacing16: style({
        paddingLeft: vars.space.spacing16,
        paddingRight: vars.space.spacing16,
      }),
      spacing20: style({
        paddingLeft: vars.space.spacing20,
        paddingRight: vars.space.spacing20,
      }),
      spacing24: style({
        paddingLeft: vars.space.spacing24,
        paddingRight: vars.space.spacing24,
      }),
      spacing28: style({
        paddingLeft: vars.space.spacing28,
        paddingRight: vars.space.spacing28,
      }),
      spacing32: style({
        paddingLeft: vars.space.spacing32,
        paddingRight: vars.space.spacing32,
      }),
      spacing36: style({
        paddingLeft: vars.space.spacing36,
        paddingRight: vars.space.spacing36,
      }),
      spacing40: style({
        paddingLeft: vars.space.spacing40,
        paddingRight: vars.space.spacing40,
      }),
      spacing44: style({
        paddingLeft: vars.space.spacing44,
        paddingRight: vars.space.spacing44,
      }),
      spacing48: style({
        paddingLeft: vars.space.spacing48,
        paddingRight: vars.space.spacing48,
      }),
      spacing52: style({
        paddingLeft: vars.space.spacing52,
        paddingRight: vars.space.spacing52,
      }),
      spacing56: style({
        paddingLeft: vars.space.spacing56,
        paddingRight: vars.space.spacing56,
      }),
      spacing64: style({
        paddingLeft: vars.space.spacing64,
        paddingRight: vars.space.spacing64,
      }),
      spacing72: style({
        paddingLeft: vars.space.spacing72,
        paddingRight: vars.space.spacing72,
      }),
      spacing80: style({
        paddingLeft: vars.space.spacing80,
        paddingRight: vars.space.spacing80,
      }),
      spacing88: style({
        paddingLeft: vars.space.spacing88,
        paddingRight: vars.space.spacing88,
      }),
      spacing96: style({
        paddingLeft: vars.space.spacing96,
        paddingRight: vars.space.spacing96,
      }),
      spacing104: style({
        paddingLeft: vars.space.spacing104,
        paddingRight: vars.space.spacing104,
      }),
      spacing112: style({
        paddingLeft: vars.space.spacing112,
        paddingRight: vars.space.spacing112,
      }),
      spacing120: style({
        paddingLeft: vars.space.spacing120,
        paddingRight: vars.space.spacing120,
      }),
    },
    paddingY: {
      none: style({
        paddingTop: vars.space.none,
        paddingBottom: vars.space.none,
      }),
      spacing2: style({
        paddingTop: vars.space.spacing2,
        paddingBottom: vars.space.spacing2,
      }),
      spacing4: style({
        paddingTop: vars.space.spacing4,
        paddingBottom: vars.space.spacing4,
      }),
      spacing8: style({
        paddingTop: vars.space.spacing8,
        paddingBottom: vars.space.spacing8,
      }),
      spacing12: style({
        paddingTop: vars.space.spacing12,
        paddingBottom: vars.space.spacing12,
      }),
      spacing16: style({
        paddingTop: vars.space.spacing16,
        paddingBottom: vars.space.spacing16,
      }),
      spacing20: style({
        paddingTop: vars.space.spacing20,
        paddingBottom: vars.space.spacing20,
      }),
      spacing24: style({
        paddingTop: vars.space.spacing24,
        paddingBottom: vars.space.spacing24,
      }),
      spacing28: style({
        paddingTop: vars.space.spacing28,
        paddingBottom: vars.space.spacing28,
      }),
      spacing32: style({
        paddingTop: vars.space.spacing32,
        paddingBottom: vars.space.spacing32,
      }),
      spacing36: style({
        paddingTop: vars.space.spacing36,
        paddingBottom: vars.space.spacing36,
      }),
      spacing40: style({
        paddingTop: vars.space.spacing40,
        paddingBottom: vars.space.spacing40,
      }),
      spacing44: style({
        paddingTop: vars.space.spacing44,
        paddingBottom: vars.space.spacing44,
      }),
      spacing48: style({
        paddingTop: vars.space.spacing48,
        paddingBottom: vars.space.spacing48,
      }),
      spacing52: style({
        paddingTop: vars.space.spacing52,
        paddingBottom: vars.space.spacing52,
      }),
      spacing56: style({
        paddingTop: vars.space.spacing56,
        paddingBottom: vars.space.spacing56,
      }),
      spacing64: style({
        paddingTop: vars.space.spacing64,
        paddingBottom: vars.space.spacing64,
      }),
      spacing72: style({
        paddingTop: vars.space.spacing72,
        paddingBottom: vars.space.spacing72,
      }),
      spacing80: style({
        paddingTop: vars.space.spacing80,
        paddingBottom: vars.space.spacing80,
      }),
      spacing88: style({
        paddingTop: vars.space.spacing88,
        paddingBottom: vars.space.spacing88,
      }),
      spacing96: style({
        paddingTop: vars.space.spacing96,
        paddingBottom: vars.space.spacing96,
      }),
      spacing104: style({
        paddingTop: vars.space.spacing104,
        paddingBottom: vars.space.spacing104,
      }),
      spacing112: style({
        paddingTop: vars.space.spacing112,
        paddingBottom: vars.space.spacing112,
      }),
      spacing120: style({
        paddingTop: vars.space.spacing120,
        paddingBottom: vars.space.spacing120,
      }),
    },
  },
  compoundVariants: [
    {
      variants: { status: 'success', variant: 'primary' }, // if prefixIconSize is undefined, this is the label
      style: buttonPrimarySuccessStyle,
    },
    {
      variants: { status: 'info', variant: 'primary' }, // if prefixIconSize is undefined, this is the label
      style: buttonPrimaryInfoStyle,
    },
    {
      variants: { status: 'warning', variant: 'primary' }, // if prefixIconSize is undefined, this is the label
      style: buttonPrimaryWarningStyle,
    },
    {
      variants: { status: 'danger', variant: 'primary' }, // if prefixIconSize is undefined, this is the label
      style: buttonPrimaryDangerStyle,
    },
    {
      variants: { status: 'success', variant: 'secondary' }, // if prefixIconSize is undefined, this is the label
      style: buttonSecondarySuccessStyle,
    },
    {
      variants: { status: 'info', variant: 'secondary' }, // if prefixIconSize is undefined, this is the label
      style: buttonSecondaryInfoStyle,
    },
    {
      variants: { status: 'warning', variant: 'secondary' }, // if prefixIconSize is undefined, this is the label
      style: buttonSecondaryWarningStyle,
    },
    {
      variants: { status: 'danger', variant: 'secondary' }, // if prefixIconSize is undefined, this is the label
      style: buttonSecondaryDangerStyle,
    },
    {
      variants: { status: 'success', variant: 'tertiary' }, // if prefixIconSize is undefined, this is the label
      style: buttonTertiarySuccessStyle,
    },
    {
      variants: { status: 'info', variant: 'tertiary' }, // if prefixIconSize is undefined, this is the label
      style: buttonTertiaryInfoStyle,
    },
    {
      variants: { status: 'warning', variant: 'tertiary' }, // if prefixIconSize is undefined, this is the label
      style: buttonTertiaryWarningStyle,
    },
    {
      variants: { status: 'danger', variant: 'tertiary' }, // if prefixIconSize is undefined, this is the label
      style: buttonTertiaryDangerStyle,
    },
  ],
});
