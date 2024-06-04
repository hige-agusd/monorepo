import { alias } from '../alias';
import * as color from '../global/palette';

const tags = {
  default: {
    color: color.palette.white,
    backgroundColor: color.palette['gray-700'],
  },
  hover: {
    backgroundColor: color.palette['gray-900'],
  },
  active: {
    backgroundColor: color.palette['gray-900'],
  },
  disabled: {
    color: alias.colors.placeholder,
  },
};

export const tagTokens = {
  white: tags,
  light: tags,
};
