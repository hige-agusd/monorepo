/* eslint-disable sonarjs/no-duplicate-string */
import {
  ConditionalValue,
  createMapValueFn,
  createSprinkles,
  defineProperties,
  RequiredConditionalValue,
} from '@vanilla-extract/sprinkles';
import { vars } from './theme.css';

const space = {
  ...vars.space,
  none: 0,
  unset: 'unset',
  '0': '0',
  '100%': '100%',
  '100vh': '100vh',
  '100vw': '100vw',
} as const;

const sizing = ['unset', '0', '100vh', '100%', 'fit-content'] as const;

export type Space = keyof typeof vars.space | 'none';
export type Color = keyof typeof vars.color;
export type BoxSizing = 'border-box' | 'content-box' | 'inherit' | 'initial';
export type SpaceValue = `${number}px` | `${number}%` | '0' | 'inherit' | `calc(${string})`;

export const unresponsiveProperties = {
  color: { ...vars.color, inherit: 'inherit' },
  background: vars.color,
  borderColor: vars.color,
  fill: vars.color,
  overflow: ['hidden', 'scroll', 'visible', 'auto'],
  userSelect: ['none'],
  outline: ['none'],
  opacity: [0],
  zIndex: {
    0: 0,
    1: 1,
    2: 2,
    dropdownBackdrop: 90,
    dropdown: 100,
    sticky: 200,
    modalBackdrop: 290,
    modal: 300,
    notification: 400,
  },
  cursor: ['default', 'pointer', 'not-allowed'],
  pointerEvents: ['none'],
  top: [0],
  bottom: [0],
  left: [0],
  right: [0],
} as const;

export type UnresponsiveProperties = keyof typeof unresponsiveProperties;

const responsiveAtomicStyles = defineProperties({
  conditions: {
    desktop: {},
  },
  defaultCondition: 'desktop',
  properties: {
    boxSizing: ['border-box', 'content-box', 'inherit', 'initial'],
    display: {
      none: 'none',
      block: 'block',
      inline: 'inline',
      inlineBlock: 'inline-block',
      flex: 'flex',
      grid: 'grid',
      inlineFlex: 'inline-flex',
    },
    position: ['relative', 'absolute', 'fixed'],
    flexDirection: {
      row: 'row',
      rowReverse: 'row-reverse',
      column: 'column',
      columnReverse: 'column-reverse',
    },
    flexWrap: {
      wrap: 'wrap',
      nowrap: 'nowrap',
    },
    flexShrink: [0],
    flexGrow: [0, 1],
    flexBasis: sizing,
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end', 'space-between'],
    alignSelf: ['stretch', 'flex-start', 'center', 'flex-end', 'space-between'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-between',
      'space-around',
      'space-evenly',
    ],
    gap: space,
    columnGap: space,
    rowGap: space,
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    margin: space,
    marginTop: { ...space, auto: 'auto' },
    marginBottom: { ...space, auto: 'auto' },
    marginLeft: { ...space, auto: 'auto' },
    marginRight: { ...space, auto: 'auto' },
    width: sizing,
    height: sizing,
    minWidth: sizing,
    minHeight: sizing,
    maxWidth: sizing,
    maxHeight: sizing,
    borderRadius: vars.borderRadius,
    borderTopLeftRadius: vars.borderRadius,
    borderTopRightRadius: vars.borderRadius,
    borderBottomLeftRadius: vars.borderRadius,
    borderBottomRightRadius: vars.borderRadius,
    fontFamily: vars.fontFamily,
    fontSize: vars.fontSize,
    fontWeight: vars.fontWeight,
    lineHeight: vars.lineHeight,
    textAlign: ['left', 'center', 'right'],
    textDecoration: ['none', 'underline'],
    textOverflow: ['ellipsis'],
    verticalAlign: [
      'baseline',
      'sub',
      'super',
      'top',
      'text-top',
      'middle',
      'bottom',
      'text-bottom',
      'initial',
      'inherit',
    ],
    whiteSpace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'initial', 'inherit'],
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['alignItems', 'justifyContent'],
    typeSize: ['fontSize', 'lineHeight'],
  },
});

const unresponsiveAtomicProperties = defineProperties({
  properties: unresponsiveProperties,
});

export const atoms = createSprinkles(responsiveAtomicStyles, unresponsiveAtomicProperties);
export type Atoms = Parameters<typeof atoms>[0];

export type OptionalResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveAtomicStyles,
  Value
>;

export type RequiredResponsiveValue<Value extends string | number> = RequiredConditionalValue<
  typeof responsiveAtomicStyles,
  Value
>;

export const mapResponsiveValue = createMapValueFn(responsiveAtomicStyles);
