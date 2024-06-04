import { atoms, vars } from '../../../themes';
import { style } from '@vanilla-extract/css';

const { accordion } = vars.components;

export const accordionItemStyle = style([
  atoms({ color: 'primary' }),
  {
    selectors: {
      '&:not(:last-child)': {
        borderBottom: `1px solid ${accordion.default.borderBottomColor}`,
      },
    },
  },
]);

export const accordionTriggerStyle = style([
  atoms({
    display: 'flex',
    flexDirection: 'row',
    gap: 'spacing16',
    alignItems: 'center',
    cursor: 'pointer',
    width: '100%',
  }),
  {
    backgroundColor: accordion.default.backgroundColor,
    padding: `calc(${vars.space.spacing16} - 2px)`,
    border: '2px solid transparent',
    selectors: {
      '&:active': {
        backgroundColor: accordion.active.backgroundColor,
      },
      '&[data-disabled]': {
        cursor: 'not-allowed',
      },
      '&:focus-visible': {
        outline: 'none',
        border: `2px solid ${accordion.focus.borderColor}`,
      },
    },
  },
]);

export const accordionTriggerLeftContainerStyle = style([
  atoms({
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-start',
  }),
]);

export const accordionLabelStyle = style({
  selectors: {
    [`${accordionTriggerStyle}:active &`]: {
      textDecoration: 'underline',
    },
    [`${accordionTriggerStyle}:hover &`]: {
      textDecoration: 'underline',
    },
    [`${accordionTriggerStyle}[data-disabled] &`]: {
      color: accordion.disabled.labelColor,
    },
  },
});

export const accordionTextStyle = style({
  selectors: {
    [`${accordionTriggerStyle}[data-disabled] &`]: {
      color: accordion.disabled.rightSideContentColor,
    },
  },
});

export const accordionTriggerRightContainerStyle = style([
  {
    width: '160px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
]);

export const accordionTriggerIconStyle = style([
  atoms({ color: 'iconBrand' }),
  {
    // Obtained from the default IconButton sizing
    width: vars.components.iconButton.size.S,
    height: vars.components.iconButton.size.S,
    transition: 'transform 50ms cubic-bezier(0.87, 0, 0.13, 1)',
    selectors: {
      [`${accordionTriggerStyle}[data-state='open'] &`]: {
        transform: 'rotate(180deg)',
      },
      [`${accordionTriggerStyle}[disabled] &`]: {
        color: accordion.disabled.iconColor,
      },
    },
  },
]);

export const accordionContentStyle = style([
  atoms({
    padding: 'spacing16',
  }),
  {
    backgroundColor: accordion.contentBackground,
  },
]);
