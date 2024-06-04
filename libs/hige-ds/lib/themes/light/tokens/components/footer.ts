import { alias } from '../alias';
import { space } from '../global';

const colors = alias.newColors;

export const footerTokens = {
  top: {
    backgroundColor: colors.canvasActive,
    paddingBottom: space.spacing32,
    paddingTop: space.spacing20,
    paddingX: space.spacing80,
    mobile: {
      paddingBottom: space.spacing16,
      paddingTop: space.spacing8,
    },
  },
  middle: {
    backgroundColor: colors.canvasActive,
    paddingBottom: space.spacing20,
    paddingX: space.spacing80,
    mobile: {
      paddingBottom: space.spacing12,
      paddingTop: space.spacing16,
      paddingX: space.spacing16,
    },
  },
  bottom: {
    backgroundColor: colors.background,
    paddingBottom: space.spacing20,
    paddingTop: space.spacing20,
    paddingX: space.spacing80,
    mobile: {
      paddingBottom: space.spacing12,
      paddingTop: space.spacing12,
      paddingX: space.spacing16,
    },
  },
  link: {
    color: colors.textPrimary,
    textDecoration: 'none',
    hover: {
      color: colors.textPrimary,
      textDecoration: 'underline',
    },
    focus: {
      color: colors.textPrimary,
      borderColor: colors.focus,
    },
    selected: {
      color: colors.link,
    },
    disabled: {
      color: colors.textDisabled,
    },
    visited: {
      color: colors.linkVisited,
    },
  },
};
