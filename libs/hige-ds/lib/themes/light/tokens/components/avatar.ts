import { alias } from '../alias';

const { newColors } = alias;

export const avatarTokens = {
  labelColor: newColors.textPrimary,
  iconColor: newColors.iconPrimary,
  backgroundColor: newColors.avatar,
  overflowBackgroundColor: newColors.avatarPlaceholder,
  focus: {
    borderColor: newColors.focus,
  },
};
