import { style } from '@vanilla-extract/css';
import { vars, atoms } from '../../../themes';

const {
  components: { accordion },
} = vars;

export const cardAccordionTriggerStyle = style([
  atoms({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'spacing4',
    borderRadius: '0x',
    width: '100%',
    color: 'primary',
    fontSize: 'bodySmall',
    paddingY: 'spacing12',
    cursor: 'pointer',
  }),
  {
    backgroundColor: accordion.card.default.backgroundColor,
    border: '2px solid transparent',
    selectors: {
      '&:active': {
        backgroundColor: accordion.card.active.backgroundColor,
      },
      '&[data-disabled]': {
        cursor: 'not-allowed',
        color: accordion.card.disabled.labelColor,
      },
      '&:focus-visible': {
        outline: 'none',
        border: `2px solid ${accordion.card.focus.borderColor}`,
      },
    },
  },
]);

export const cardAccordionTriggerLabelStyle = style({
  selectors: {
    [`${cardAccordionTriggerStyle}:hover &`]: {
      textDecoration: 'underline',
    },
  },
});

export const cardAccordionTriggerIconStyle = style({
  color: accordion.card.default.iconColor,
  height: '20px',
  width: '20px',
  transition: 'transform 50ms cubic-bezier(0.87, 0, 0.13, 1)',
  selectors: {
    [`${cardAccordionTriggerStyle}[data-state='open'] &`]: {
      transform: 'rotate(180deg)',
    },
    [`${cardAccordionTriggerStyle}[data-disabled] &`]: {
      color: accordion.card.disabled.iconColor,
    },
  },
});
