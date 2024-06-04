import { alias } from '../alias';

const { newColors } = alias;

export const menuListTokens = {
  backgroundColor: newColors.canvas,
  label: {
    color: newColors.textPrimary,
  },
  description: {
    color: newColors.textPrimary,
  },
  icon: {
    color: newColors.iconPrimary,
  },
  hover: {
    label: {
      color: newColors.buttonPrimary,
    },
    description: {
      color: newColors.buttonPrimary,
    },
    backgroundColor: newColors.canvasHover,
  },
  active: {
    label: {
      color: newColors.buttonPrimary,
    },
    description: {
      color: newColors.buttonPrimary,
    },
    borderColor: newColors.canvasActive,
    backgroundColor: newColors.canvasActive,
  },
  selected: {
    backgroundColor: newColors.canvasSelected,
    label: {
      color: newColors.textActive,
    },
    description: {
      color: newColors.textActive,
    },
    icon: {
      color: newColors.iconActive,
    },
    checkIcon: {
      color: newColors.iconActive,
    },
    hover: {
      backgroundColor: newColors.canvasSelectedHover,
    },
  },
  focus: {
    label: {
      color: newColors.buttonPrimary,
    },
    description: {
      color: newColors.buttonPrimary,
    },
    borderColor: newColors.focus,
    backgroundColor: newColors.backgroundActive,
  },
  disabled: {
    label: {
      color: newColors.textDisabled,
    },
    description: {
      color: newColors.textDisabled,
    },
    icon: {
      color: newColors.iconDisabled,
    },
    checkIcon: {
      color: newColors.iconDisabled,
    },
    backgroundColor: 'unset',
  },
};
