/* eslint-disable no-magic-numbers */
import { modularScale } from 'polished';
const createScale = (ratio: number, base: number) => (steps: number) =>
  `${modularScale(steps, base, ratio)}px`;

export const lineHeightScale = createScale(1.25, 24);
export const borderRadiusScale = createScale(1.5, 4);
