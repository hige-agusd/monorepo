import { alias } from '../alias';

const { newColors } = alias;

export const cardTokens = {
  color: 'unset',
  divider: 'unset',
  titleIconColor: 'unset',
  tooltipIconColor: 'unset',
  backgroundColor: newColors.canvas,
  borderRadius: '12px',
  hover: {
    backgroundColor: newColors.canvas,
  },
};
