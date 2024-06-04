import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { atoms, vars } from '../../../themes';

export const maxRowVar = createVar();

export const typographyRecipe = recipe({
  variants: {
    kind: {
      displayLarge: atoms({
        fontSize: 'displayLarge',
        fontWeight: 'regular',
        lineHeight: 'medium',
      }),
      displayMedium: atoms({
        fontSize: 'displayMedium',
        fontWeight: 'regular',
        lineHeight: 'small',
      }),
      displaySmall: atoms({
        fontSize: 'displaySmall',
        fontWeight: 'regular',
        lineHeight: 'medium',
      }),
      h1: atoms({
        fontSize: 'h1',
        fontWeight: 'regular',
        lineHeight: 'medium',
      }),
      h2: atoms({
        fontSize: 'h2',
        fontWeight: 'regular',
        lineHeight: 'small',
      }),
      h3: atoms({
        fontSize: 'h3',
        fontWeight: 'regular',
        lineHeight: 'medium',
      }),
      body: atoms({ fontSize: 'body', lineHeight: 'large' }),
      bodySmall: atoms({ fontSize: 'bodySmall', lineHeight: 'medium' }),
      caption: atoms({ fontSize: 'caption', lineHeight: 'small' }),
      overline: atoms({ fontSize: 'overline', lineHeight: 'small' }),
    },
    alignment: {
      inherit: {
        textAlign: 'inherit',
      },
      left: {
        textAlign: 'left',
      },
      right: {
        textAlign: 'right',
      },
      center: {
        textAlign: 'center',
      },
      justify: {
        textAlign: 'justify',
      },
    },
    ellipsis: {
      true: style([
        atoms({
          textOverflow: 'ellipsis',
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          maxWidth: '100%',
        }),
        {
          wordBreak: 'break-all',
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: maxRowVar,
        },
      ]),
    },
    fontWeight: {
      bold: {
        fontWeight: vars.fontWeight.bold,
      },
      semibold: {
        fontWeight: vars.fontWeight.semiBold,
      },
    },
  },
});

export type TypographyVariants = Parameters<typeof typographyRecipe>[0];
