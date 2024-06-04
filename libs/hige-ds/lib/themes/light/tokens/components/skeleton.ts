import { alias } from '../alias';
import { space } from '../global/dimensions/space';

const { colors } = alias;

const DIVIDIER_HEIGHT = 1;
const TEXT_HEIGHT = 12;
const ICON_HEIGHT = 16; // in PX
// const ICON_HEIGHT = 73; // in SVG units
const RECTANGLE_HEIGHT = 20;

const FULL_PERCENTAGE = 100;

const getSquareHoleMask = (size: number) => {
  const pos = (FULL_PERCENTAGE - size) / 2;
  return `%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='${pos}' fill='white'/%3E%3Crect y='${
    pos + size
  }' width='100' height='${pos}' fill='white'/%3E%3Crect y='${pos}' width='${pos}' height='${size}' fill='white'/%3E%3Crect x='${
    pos + size
  }' y='${pos}' width='${pos}' height='${size}' fill='white'/%3E%3C/svg%3E%0A`;
};
const circleGradient = 'radial-gradient(circle at center, transparent 10px, black 10px)';

const getCenteredRectangleGradient = (height: number) => {
  const calcHeight = height / 2;
  return `linear-gradient(#000 0%, #000 calc(50% - ${calcHeight}px), transparent calc(50% - ${calcHeight}px), transparent calc(50% + ${calcHeight}px), #000 calc(50% + ${calcHeight}px), #000 100%)`;
};

const getRectangleGradient = (height: number) =>
  `linear-gradient(transparent 0%, transparent ${height}px, #000 ${height}px, #000 100%)`;

export const skeletonTokens = {
  aspectRatio: '1 / 1',
  background: colors.white,
  backgroundColor: colors.skeletonWaveColor,
  backgroundImage: `linear-gradient(90deg, ${colors.skeletonWaveColor},  ${colors.skeletonWaveColor1}  ${colors.skeletonWaveColor})`,
  backgroundSize: '200% 100%',
  circleHeight: space.spacing20,
  circleMaskImage: circleGradient,
  divider: '1px',
  dividerMask: getRectangleGradient(DIVIDIER_HEIGHT),
  iconMask: `url("data:image/svg+xml,${getSquareHoleMask(ICON_HEIGHT)}")`, // use SVG units when re-enabling this
  iconMaskImage: getRectangleGradient(ICON_HEIGHT),
  iconMaskRepeat: 'no-repeat',
  iconMaskPosition: 'center',
  iconMinHeight: '16px',
  keyPointGap: space.spacing24,
  noMask: 'unset',
  rectangleHeight: space.spacing20,
  rectangleMask: getRectangleGradient(RECTANGLE_HEIGHT),
  rectangleCenteredMask: getCenteredRectangleGradient(RECTANGLE_HEIGHT),
  textHeight: space.spacing12,
  textMaskImage: getRectangleGradient(TEXT_HEIGHT),
  textCenteredMask: getCenteredRectangleGradient(TEXT_HEIGHT),
  titleHeight: space.spacing36,
};
