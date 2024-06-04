import { alias } from '../alias';

const { newColors } = alias;

export const switchTokens = {
  handle: { backgroundColor: newColors.iconOnColor },
  off: {
    backgroundColor: newColors.switchOff,
    disabled: {
      backgroundColor: newColors.switchOffDisabled,
    },
  },
  on: {
    backgroundColor: newColors.switchOn,
    disabled: {
      backgroundColor: newColors.switchOnDisabled,
    },
  },
  focus: {
    borderColor: newColors.focusInset,
  },
};
