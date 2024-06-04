import { style } from '@vanilla-extract/css';
import { atoms } from '../../../themes';

export const typographyBaseStyle = style([
  atoms({
    fontFamily: 'body',
    fontWeight: 'regular',
    margin: 'none',
    padding: 'none',
  }),
]);
