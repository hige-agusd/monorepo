import { vars, atoms } from '../../themes';
import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { transparentize } from 'polished';

const noBorderValue = 'none !important';
const noBorderRadiusValue = 'unset !important';
const { button: buttonTokens } = vars.components;

// Define the base styles for the button
export const buttonBase = style({
  border: noBorderValue,
  borderRadius: noBorderRadiusValue,
});

const btnPrimaryStyle = style({
  backgroundColor: buttonTokens.primary.background,
  borderColor: buttonTokens.primary.border,
  color: buttonTokens.primary.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.primary.hover.background,
      borderColor: buttonTokens.primary.hover.border,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.primary.background,
      borderColor: buttonTokens.primary.border,
      color: buttonTokens.primary.color,
      outlineStyle: 'none',
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.primary.focus.background,
      borderColor: buttonTokens.primary.focus.background,
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineColor: buttonTokens.primary.focus.border,
      outlineOffset: '-4px',
    },
    '&:disabled': {
      backgroundColor: buttonTokens.primary.disabled.background,
      borderColor: buttonTokens.primary.disabled.border,
      color: buttonTokens.primary.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.primary.active.background,
      borderColor: buttonTokens.primary.active.border,
      outline: 'none',
    },
  },
});
const btnSecondaryStyle = style({
  backgroundColor: buttonTokens.secondary.background,
  borderColor: buttonTokens.secondary.border,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.secondary.hover.background,
      borderColor: buttonTokens.secondary.hover.border,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.secondary.background,
      borderColor: buttonTokens.secondary.border,
      color: buttonTokens.secondary.color,
      outlineStyle: 'none',
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.secondary.focus.background,
      borderColor: buttonTokens.secondary.focus.background,
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineColor: buttonTokens.secondary.focus.border,
      outlineOffset: '-4px',
    },
    '&:disabled': {
      backgroundColor: buttonTokens.secondary.disabled.background,
      borderColor: buttonTokens.secondary.disabled.border,
      color: buttonTokens.secondary.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.secondary.active.background,
      borderColor: buttonTokens.secondary.active.border,
      outline: 'none',
    },
  },
});
const btnTertiaryStyle = style({
  backgroundColor: buttonTokens.tertiary.background,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: buttonTokens.tertiary.border,
  color: buttonTokens.tertiary.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.tertiary.hover.background,
      borderColor: buttonTokens.tertiary.hover.border,
      color: buttonTokens.tertiary.hover.color,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.tertiary.background,
      borderColor: buttonTokens.tertiary.border,
      color: buttonTokens.tertiary.color,
      outlineStyle: 'none',
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.tertiary.focus.background,
      outline: `2px solid ${buttonTokens.tertiary.focus.border}`,
      outlineOffset: '-2px',
      borderColor: buttonTokens.tertiary.focus.background,
      color: buttonTokens.tertiary.focus.color,
    },
    '&:disabled': {
      backgroundColor: buttonTokens.tertiary.disabled.background,
      borderColor: buttonTokens.tertiary.disabled.border,
      color: buttonTokens.tertiary.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.tertiary.active.background,
      borderColor: buttonTokens.tertiary.active.border,
      color: buttonTokens.tertiary.active.color,
      outline: 'unset',
    },
  },
});

const btnPrimarySuccessStyle = style({
  backgroundColor: buttonTokens.primary.status.success.background,
  borderColor: buttonTokens.primary.status.success.border,
  color: buttonTokens.primary.status.success.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.primary.status.success.hover.background,
      borderColor: buttonTokens.primary.status.success.hover.border,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.primary.status.success.background,
      borderColor: buttonTokens.primary.status.success.border,
      color: buttonTokens.primary.status.success.color,
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.primary.status.success.focus.background,
      outlineColor: buttonTokens.primary.status.success.focus.border,
      borderColor: buttonTokens.primary.status.success.focus.background,
    },
    '&:disabled': {
      backgroundColor: buttonTokens.primary.status.success.disabled.background,
      borderColor: buttonTokens.primary.status.success.disabled.border,
      color: buttonTokens.primary.status.success.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.primary.status.success.active.background,
      borderColor: buttonTokens.primary.status.success.active.border,
      outline: 'none',
    },
  },
});
const btnPrimaryInfoStyle = style({
  backgroundColor: buttonTokens.primary.status.info.background,
  borderColor: buttonTokens.primary.status.info.border,
  color: buttonTokens.primary.status.info.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.primary.status.info.hover.background,
      borderColor: buttonTokens.primary.status.info.hover.border,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.primary.status.info.background,
      borderColor: buttonTokens.primary.status.info.border,
      color: buttonTokens.primary.status.info.color,
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.primary.status.info.focus.background,
      outlineColor: buttonTokens.primary.status.info.focus.border,
      borderColor: buttonTokens.primary.status.info.focus.background,
    },
    '&:disabled': {
      backgroundColor: buttonTokens.primary.status.info.disabled.background,
      borderColor: buttonTokens.primary.status.info.disabled.border,
      color: buttonTokens.primary.status.info.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.primary.status.info.active.background,
      borderColor: buttonTokens.primary.status.info.active.border,
      outline: 'none',
    },
  },
});
const btnPrimaryWarningStyle = style({
  backgroundColor: buttonTokens.primary.status.warning.background,
  borderColor: buttonTokens.primary.status.warning.border,
  color: buttonTokens.primary.status.warning.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.primary.status.warning.hover.background,
      borderColor: buttonTokens.primary.status.warning.hover.border,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.primary.status.warning.background,
      borderColor: buttonTokens.primary.status.warning.border,
      color: buttonTokens.primary.status.warning.color,
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.primary.status.warning.focus.background,
      outlineColor: buttonTokens.primary.status.warning.focus.border,
      borderColor: buttonTokens.primary.status.warning.focus.background,
    },
    '&:disabled': {
      backgroundColor: buttonTokens.primary.status.warning.disabled.background,
      borderColor: buttonTokens.primary.status.warning.disabled.border,
      color: buttonTokens.primary.status.warning.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.primary.status.warning.active.background,
      borderColor: buttonTokens.primary.status.warning.active.border,
      outline: 'none',
    },
  },
});
const btnPrimaryDangerStyle = style({
  backgroundColor: buttonTokens.primary.status.danger.background,
  borderColor: buttonTokens.primary.status.danger.border,
  color: buttonTokens.primary.status.danger.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.primary.status.danger.hover.background,
      borderColor: buttonTokens.primary.status.danger.hover.border,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.primary.status.danger.background,
      borderColor: buttonTokens.primary.status.danger.border,
      color: buttonTokens.primary.status.danger.color,
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.primary.status.danger.focus.background,
      outlineColor: buttonTokens.primary.status.danger.focus.border,
      borderColor: buttonTokens.primary.status.danger.focus.background,
    },
    '&:disabled': {
      backgroundColor: buttonTokens.primary.status.danger.disabled.background,
      borderColor: buttonTokens.primary.status.danger.disabled.border,
      color: buttonTokens.primary.status.danger.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.primary.status.danger.active.background,
      borderColor: buttonTokens.primary.status.danger.active.border,
      outline: 'none',
    },
  },
});

const btnSecondarySuccessStyle = style({
  backgroundColor: buttonTokens.secondary.status.success.background,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: buttonTokens.secondary.status.success.border,
  color: buttonTokens.secondary.status.success.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.secondary.status.success.hover.background,
      borderColor: buttonTokens.secondary.status.success.hover.border,
      color: buttonTokens.secondary.status.success.hover.color,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.secondary.status.success.background,
      borderColor: buttonTokens.secondary.status.success.border,
      color: buttonTokens.secondary.status.success.color,
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.secondary.status.success.focus.background,
      outline: `2px solid ${buttonTokens.secondary.status.success.focus.border}`,
      outlineOffset: '-2px',
      borderColor: buttonTokens.secondary.status.success.focus.background,
      color: buttonTokens.secondary.status.success.focus.color,
    },
    '&:disabled': {
      backgroundColor:
        buttonTokens.secondary.status.success.disabled.background,
      borderColor: buttonTokens.secondary.status.success.disabled.border,
      color: buttonTokens.secondary.status.success.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.secondary.status.success.active.background,
      borderColor: buttonTokens.secondary.status.success.active.border,
      color: buttonTokens.secondary.status.success.active.color,
      outline: 'unset',
    },
  },
});
const btnSecondaryInfoStyle = style({
  backgroundColor: buttonTokens.secondary.status.info.background,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: buttonTokens.secondary.status.info.border,
  color: buttonTokens.secondary.status.info.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.secondary.status.info.hover.background,
      borderColor: buttonTokens.secondary.status.info.hover.border,
      color: buttonTokens.secondary.status.info.hover.color,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.secondary.status.info.background,
      borderColor: buttonTokens.secondary.status.info.border,
      color: buttonTokens.secondary.status.info.color,
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.secondary.status.info.focus.background,
      outline: `2px solid ${buttonTokens.secondary.status.info.focus.border}`,
      outlineOffset: '-2px',
      borderColor: buttonTokens.secondary.status.info.focus.background,
      color: buttonTokens.secondary.status.info.focus.color,
    },
    '&:disabled': {
      backgroundColor: buttonTokens.secondary.status.info.disabled.background,
      borderColor: buttonTokens.secondary.status.info.disabled.border,
      color: buttonTokens.secondary.status.info.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.secondary.status.info.active.background,
      borderColor: buttonTokens.secondary.status.info.active.border,
      color: buttonTokens.secondary.status.info.active.color,
      outline: 'unset',
    },
  },
});
const btnSecondaryWarningStyle = style({
  backgroundColor: buttonTokens.secondary.status.warning.background,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: buttonTokens.secondary.status.warning.border,
  color: buttonTokens.secondary.status.warning.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.secondary.status.warning.hover.background,
      borderColor: buttonTokens.secondary.status.warning.hover.border,
      color: buttonTokens.secondary.status.warning.hover.color,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.secondary.status.warning.background,
      borderColor: buttonTokens.secondary.status.warning.border,
      color: buttonTokens.secondary.status.warning.color,
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.secondary.status.warning.focus.background,
      outline: `2px solid ${buttonTokens.secondary.status.warning.focus.border}`,
      outlineOffset: '-2px',
      borderColor: buttonTokens.secondary.status.warning.focus.background,
      color: buttonTokens.secondary.status.warning.focus.color,
    },
    '&:disabled': {
      backgroundColor:
        buttonTokens.secondary.status.warning.disabled.background,
      borderColor: buttonTokens.secondary.status.warning.disabled.border,
      color: buttonTokens.secondary.status.warning.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.secondary.status.warning.active.background,
      borderColor: buttonTokens.secondary.status.warning.active.border,
      color: buttonTokens.secondary.status.warning.active.color,
      outline: 'unset',
    },
  },
});
const btnSecondaryDangerStyle = style({
  backgroundColor: buttonTokens.secondary.status.danger.background,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: buttonTokens.secondary.status.danger.border,
  color: buttonTokens.secondary.status.danger.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.secondary.status.danger.hover.background,
      borderColor: buttonTokens.secondary.status.danger.hover.border,
      color: buttonTokens.secondary.status.danger.hover.color,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.secondary.status.danger.background,
      borderColor: buttonTokens.secondary.status.danger.border,
      color: buttonTokens.secondary.status.danger.color,
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.secondary.status.danger.focus.background,
      outline: `2px solid ${buttonTokens.secondary.status.danger.focus.border}`,
      outlineOffset: '-2px',
      borderColor: buttonTokens.secondary.status.danger.focus.background,
      color: buttonTokens.secondary.status.danger.focus.color,
    },
    '&:disabled': {
      backgroundColor: buttonTokens.secondary.status.danger.disabled.background,
      borderColor: buttonTokens.secondary.status.danger.disabled.border,
      color: buttonTokens.secondary.status.danger.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.secondary.status.danger.active.background,
      borderColor: buttonTokens.secondary.status.danger.active.border,
      color: buttonTokens.secondary.status.danger.active.color,
      outline: 'unset',
    },
  },
});

const btnTertiarySuccessStyle = style({
  backgroundColor: buttonTokens.tertiary.status.success.background,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: buttonTokens.tertiary.status.success.border,
  color: buttonTokens.tertiary.status.success.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.tertiary.status.success.hover.background,
      borderColor: buttonTokens.tertiary.status.success.hover.border,
      color: buttonTokens.tertiary.status.success.hover.color,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.tertiary.status.success.background,
      borderColor: buttonTokens.tertiary.status.success.border,
      color: buttonTokens.tertiary.status.success.color,
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.tertiary.status.success.focus.background,
      outline: `2px solid ${buttonTokens.tertiary.status.success.focus.border}`,
      outlineOffset: '-2px',
      borderColor: buttonTokens.tertiary.status.success.focus.background,
      color: buttonTokens.tertiary.status.success.focus.color,
    },
    '&:disabled': {
      backgroundColor: buttonTokens.tertiary.status.success.disabled.background,
      borderColor: buttonTokens.tertiary.status.success.disabled.border,
      color: buttonTokens.tertiary.status.success.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.tertiary.status.success.active.background,
      borderColor: buttonTokens.tertiary.status.success.active.border,
      color: buttonTokens.tertiary.status.success.active.color,
      outline: 'unset',
    },
  },
});
const btnTertiaryInfoStyle = style({
  backgroundColor: buttonTokens.tertiary.status.info.background,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: buttonTokens.tertiary.status.info.border,
  color: buttonTokens.tertiary.status.info.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.tertiary.status.info.hover.background,
      borderColor: buttonTokens.tertiary.status.info.hover.border,
      color: buttonTokens.tertiary.status.info.hover.color,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.tertiary.status.info.background,
      borderColor: buttonTokens.tertiary.status.info.border,
      color: buttonTokens.tertiary.status.info.color,
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.tertiary.status.info.focus.background,
      outline: `2px solid ${buttonTokens.tertiary.status.info.focus.border}`,
      outlineOffset: '-2px',
      borderColor: buttonTokens.tertiary.status.info.focus.background,
      color: buttonTokens.tertiary.status.info.focus.color,
    },
    '&:disabled': {
      backgroundColor: buttonTokens.tertiary.status.info.disabled.background,
      borderColor: buttonTokens.tertiary.status.info.disabled.border,
      color: buttonTokens.tertiary.status.info.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.tertiary.status.info.active.background,
      borderColor: buttonTokens.tertiary.status.info.active.border,
      color: buttonTokens.tertiary.status.info.active.color,
      outline: 'unset',
    },
  },
});
const btnTertiaryWarningStyle = style({
  backgroundColor: buttonTokens.tertiary.status.warning.background,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: buttonTokens.tertiary.status.warning.border,
  color: buttonTokens.tertiary.status.warning.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.tertiary.status.warning.hover.background,
      borderColor: buttonTokens.tertiary.status.warning.hover.border,
      color: buttonTokens.tertiary.status.warning.hover.color,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.tertiary.status.warning.background,
      borderColor: buttonTokens.tertiary.status.warning.border,
      color: buttonTokens.tertiary.status.warning.color,
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.tertiary.status.warning.focus.background,
      outline: `2px solid ${buttonTokens.tertiary.status.warning.focus.border}`,
      outlineOffset: '-2px',
      borderColor: buttonTokens.tertiary.status.warning.focus.background,
      color: buttonTokens.tertiary.status.warning.focus.color,
    },
    '&:disabled': {
      backgroundColor: buttonTokens.tertiary.status.warning.disabled.background,
      borderColor: buttonTokens.tertiary.status.warning.disabled.border,
      color: buttonTokens.tertiary.status.warning.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.tertiary.status.warning.active.background,
      borderColor: buttonTokens.tertiary.status.warning.active.border,
      color: buttonTokens.tertiary.status.warning.active.color,
      outline: 'unset',
    },
  },
});
const btnTertiaryDangerStyle = style({
  backgroundColor: buttonTokens.tertiary.status.danger.background,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: buttonTokens.tertiary.status.danger.border,
  color: buttonTokens.tertiary.status.danger.color,

  selectors: {
    '&:hover': {
      backgroundColor: buttonTokens.tertiary.status.danger.hover.background,
      borderColor: buttonTokens.tertiary.status.danger.hover.border,
      color: buttonTokens.tertiary.status.danger.hover.color,
    },
    '&:focus': {
      // Needed to override rex button focus
      backgroundColor: buttonTokens.tertiary.status.danger.background,
      borderColor: buttonTokens.tertiary.status.danger.border,
      color: buttonTokens.tertiary.status.danger.color,
    },
    '&:focus-visible': {
      backgroundColor: buttonTokens.tertiary.status.danger.focus.background,
      outline: `2px solid ${buttonTokens.tertiary.status.danger.focus.border}`,
      outlineOffset: '-2px',
      borderColor: buttonTokens.tertiary.status.danger.focus.background,
      color: buttonTokens.tertiary.status.danger.focus.color,
    },
    '&:disabled': {
      backgroundColor: buttonTokens.tertiary.status.danger.disabled.background,
      borderColor: buttonTokens.tertiary.status.danger.disabled.border,
      color: buttonTokens.tertiary.status.danger.disabled.color,
    },
    '&:active': {
      backgroundColor: buttonTokens.tertiary.status.danger.active.background,
      borderColor: buttonTokens.tertiary.status.danger.active.border,
      color: buttonTokens.tertiary.status.danger.active.color,
      outline: 'unset',
    },
  },
});

export const btnRecipe = recipe({
  variants: {
    variant: {
      primary: btnPrimaryStyle,
      secondary: btnSecondaryStyle,
      tertiary: btnTertiaryStyle,
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
      style: btnPrimarySuccessStyle,
    },
    {
      variants: { status: 'info', variant: 'primary' }, // if prefixIconSize is undefined, this is the label
      style: btnPrimaryInfoStyle,
    },
    {
      variants: { status: 'warning', variant: 'primary' }, // if prefixIconSize is undefined, this is the label
      style: btnPrimaryWarningStyle,
    },
    {
      variants: { status: 'danger', variant: 'primary' }, // if prefixIconSize is undefined, this is the label
      style: btnPrimaryDangerStyle,
    },
    {
      variants: { status: 'success', variant: 'secondary' }, // if prefixIconSize is undefined, this is the label
      style: btnSecondarySuccessStyle,
    },
    {
      variants: { status: 'info', variant: 'secondary' }, // if prefixIconSize is undefined, this is the label
      style: btnSecondaryInfoStyle,
    },
    {
      variants: { status: 'warning', variant: 'secondary' }, // if prefixIconSize is undefined, this is the label
      style: btnSecondaryWarningStyle,
    },
    {
      variants: { status: 'danger', variant: 'secondary' }, // if prefixIconSize is undefined, this is the label
      style: btnSecondaryDangerStyle,
    },
    {
      variants: { status: 'success', variant: 'tertiary' }, // if prefixIconSize is undefined, this is the label
      style: btnTertiarySuccessStyle,
    },
    {
      variants: { status: 'info', variant: 'tertiary' }, // if prefixIconSize is undefined, this is the label
      style: btnTertiaryInfoStyle,
    },
    {
      variants: { status: 'warning', variant: 'tertiary' }, // if prefixIconSize is undefined, this is the label
      style: btnTertiaryWarningStyle,
    },
    {
      variants: { status: 'danger', variant: 'tertiary' }, // if prefixIconSize is undefined, this is the label
      style: btnTertiaryDangerStyle,
    },
  ],
});
