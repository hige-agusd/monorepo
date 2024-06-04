/* eslint-disable no-magic-numbers */
import { createTheme } from '@vanilla-extract/css';
import { borderRadiusScale } from './scale';
import { alias } from './tokens/alias';
import { horizonAlias } from './tokens/alias/horizon-alias';
import * as componentTokens from './tokens/components';
import { fontSize, fontWeight, lineHeight } from './tokens/global/dimensions/font';
import { space } from './tokens/global/dimensions/space';
import { palette } from './tokens/global/palette';

const { colors: colorAlias, newColors: newColorAlias } = alias;

const color = {
  ...horizonAlias,
  ...newColorAlias, // Above current colorAlias so it can be overridden
  ...colorAlias,
  ...palette,
};

const borderRadiusMap = {
  '0x': borderRadiusScale(0),
  '1x': borderRadiusScale(1),
  '2x': borderRadiusScale(2),
  '3x': borderRadiusScale(3),
  '4x': borderRadiusScale(4),
  '5x': borderRadiusScale(5),
  full: '99999px',
};

const rexTheme = {
  space,
  components: componentTokens,
  color,
  borderRadius: borderRadiusMap,
  borderTopLeftRadius: borderRadiusMap,
  borderTopRightRadius: borderRadiusMap,
  borderBottomLeftRadius: borderRadiusMap,
  borderBottomRightRadius: borderRadiusMap,
  fontFamily: {
    body: '"Rakuten Sans UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSize,
  fontWeight,
  lineHeight,
};

const themeInfo = createTheme(rexTheme);
const themeLight = themeInfo[0];
const vars = themeInfo[1];

export { themeLight, vars, borderRadiusMap, rexTheme };
