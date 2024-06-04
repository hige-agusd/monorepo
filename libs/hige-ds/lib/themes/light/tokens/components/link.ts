import { alias } from '../alias';

const { newColors } = alias;

export const linkTokens = {
  states: {
    default: {
      primaryColor: newColors.link,
      secondaryColor: newColors.link,
      tertiaryColor: newColors.link,
    },
    hover: {
      primaryColor: newColors.linkHover,
      secondaryColor: newColors.linkHover,
      tertiaryColor: newColors.linkHover,
    },
    active: {
      primaryColor: newColors.linkActive,
      secondaryColor: newColors.linkActive,
      tertiaryColor: newColors.linkActive,
    },
    focus: {
      primaryColor: newColors.link,
      secondaryColor: newColors.link,
      tertiaryColor: newColors.link,
    },
    visited: {
      primaryColor: newColors.linkVisited,
      secondaryColor: newColors.linkVisited,
      tertiaryColor: newColors.linkVisited,
    },
  },
};
