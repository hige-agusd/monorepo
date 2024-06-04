import { blue } from './colors/blue';
import { cobalt } from './colors/cobalt';
import { gray } from './colors/gray';
import { green } from './colors/green';
import { lightBlue } from './colors/light-blue';
import { miscColors } from './colors/misc';
import { orange } from './colors/orange';
import { pink } from './colors/pink';
import { purple } from './colors/purple';
import { red } from './colors/red';
import { transparent } from './colors/transparent';
import { yellow } from './colors/yellow';

export const palette = {
  ...blue,
  ...cobalt,
  ...gray,
  ...green,
  ...lightBlue,
  ...orange,
  ...pink,
  ...purple,
  ...red,
  ...transparent,
  ...yellow,
  ...miscColors, // Colors not in palette. TODO: normalise them
  white: '#ffffff',
} as const;
