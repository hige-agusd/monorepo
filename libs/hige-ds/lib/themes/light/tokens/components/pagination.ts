import { alias } from '../alias';
import { space } from '../global/dimensions/space';
import { palette } from '../global/palette';

// TODO: palette => alias
export const paginationTokens = {
  root: {
    gap: space.spacing24,
  },
  button: {
    background: 'transparent',
    color: palette['gray-800'],
    height: space.spacing24,
    padding: space.spacing4,
    width: space.spacing24,
    states: {
      active: {
        background: palette['red-100'],
        color: palette['red-700'],
        borderColor: palette['red-700'],
      },
      disabled: {
        background: 'transparent',
        borderColor: 'transparent',
        color: alias.colors.disabledColor,
      },
      hover: {
        background: palette['red-100'],
        color: palette['red-700'],
      },
      focus: {
        background: palette['red-100'],
        color: palette['red-700'],
        borderColor: palette['red-700'],
      },
      selected: {
        background: palette['red-700'],
        color: palette.white,
      },
    },
  },
  buttonGroup: {
    gap: space.none,
  },
  iconButton: {
    height: space.spacing24,
    padding: space.spacing4,
    width: space.spacing24,
  },
};
