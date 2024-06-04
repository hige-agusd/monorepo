import { alias } from '../alias';

const { newColors } = alias;

export const overflowMenuTokens = {
  color: newColors.textPrimary,
  backgroundColor: newColors.background,
  icon: {
    height: '18px',
    width: '18px',
  },
  active: {
    backgroundColor: newColors.backgroundHover,
  },
  hover: {
    backgroundColor: newColors.backgroundHover,
  },
  isDelete: {
    color: newColors.textDanger,
  },
};
