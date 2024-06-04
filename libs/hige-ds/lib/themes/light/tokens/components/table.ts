import { alias } from '../alias';
import { fontSize } from '../global/dimensions/font';
import { space } from '../global/dimensions/space';
import { palette } from '../global/palette';

const { colors } = alias;
const CLEAR_BORDER = '1px solid transparent';

export const tableTokens = {
  background: palette.white,
  clearBorder: CLEAR_BORDER,
  cell: {
    background: palette.white, // default background
    color: palette['gray-900'],
    fontSize: fontSize.body,
    errorBorderColor: colors.inputFieldErrorBorder,
    errorColor: colors.inputFieldErrorColor,
    size: {
      default: {
        height: space.spacing56,
        padding: `${space.spacing12} ${space.spacing24}`,
      },
      small: {
        height: space.spacing56,
        padding: `${space.spacing12} ${space.spacing24}`,
      },
      medium: {
        height: space.spacing56,
        padding: `${space.spacing12} ${space.spacing24}`,
      },
    },
    variant: {
      basic: {
        states: {
          active: {
            // for selected rows
            background: colors.tableSelected,
          },
          hover: {
            background: palette['gray-100'],
          },
        },
      },
      grid: {
        states: {
          active: {
            // for selected rows
            background: colors.tableSelected,
          },
          hover: {
            background: palette['gray-100'],
          },
        },
        borderColorLeft: palette['gray-300'],
        borderColorRight: palette['gray-300'],
      },
      striped: {
        states: {
          active: {
            // for selected rows
            background: colors.tableSelected,
          },
        },
        backgroundHead: palette['gray-200'],
        backgroundCellOdd: palette.white,
        backgroundCellEven: palette['gray-100'],
      },
      backgroundColor: {
        states: {
          default: {
            info: { backgroundColor: palette['blue-100'] },
            danger: { backgroundColor: colors.dangerBackground },
            warning: { backgroundColor: palette['orange-100'] },
            success: { backgroundColor: palette['green-100'] },
          },
          hover: {
            info: { backgroundColor: palette['blue-200'] },
            danger: { backgroundColor: palette['red-200'] },
            warning: { backgroundColor: palette['orange-200'] },
            success: { backgroundColor: palette['green-200'] },
          },
        },
      },
    },
  },
  head: {
    borderColor: palette['gray-300'],
    fontWeight: 'bold', // default
    borderTop: `1px solid ${palette['gray-300']}`,
    variant: {
      basic: {},
      grid: {},
      striped: {},
    },
  },
  sortLabel: {
    states: {
      active: {
        color: colors.tableSelected,
      },
      hover: {
        background: palette.white,
      },
    },
  },
  row: {
    borderColor: palette['gray-300'],
    borderColorLast: palette['gray-300'],
    lineHeight: '1.5',
    size: {
      default: {
        height: space.spacing56,
      },
      small: {
        height: space.spacing56,
      },
      medium: {
        height: space.spacing56,
      },
    },
  },
};
