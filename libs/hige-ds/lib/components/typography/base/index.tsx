import { assignInlineVars } from '@vanilla-extract/dynamic';
import React, { forwardRef } from 'react';
import { Atoms } from '../../../themes/light/atoms.css';
import { Box } from '../../box';
import { maxRowVar, typographyRecipe, TypographyVariants } from './recipe.css';
import { typographyBaseStyle } from './styles.css';
import { IWithDataTest } from 'libs/hige-ds/lib/common/contracts';
import classNames from 'classnames';

export const Typography = forwardRef<HTMLElement, IProps>(
  (
    {
      as,
      kind,
      children,
      classes,
      alignment,
      ellipsis,
      ellipsisMaxRows = 1,
      fontWeight,
      color = 'textPrimary',
      id,
      'data-test': dataTest,
    },
    ref
  ) => {
    const recipeClasses = typographyRecipe({ kind, alignment, fontWeight, ellipsis });
    const textClasses = classNames([typographyBaseStyle, recipeClasses, classes]);

    return (
      <Box
        id={id}
        ref={ref}
        as={as}
        className={textClasses}
        style={assignInlineVars({
          [maxRowVar]: String(ellipsisMaxRows),
        })}
        color={color === 'unset' ? undefined : color}
        data-test={dataTest}
      >
        {children}
      </Box>
    );
  }
);
Typography.displayName = 'Typography';

export type TColors =
  | Extract<
      Atoms['color'],
      | 'textPrimary'
      | 'textSecondary'
      | 'textDanger'
      | 'textPlaceholder'
      | 'textHelper'
      | 'textSuccess'
      | 'textOnColor'
      | 'inherit'
    >
  | 'unset';

export type IProps = {
  children: React.ReactNode;
  classes?: string;
  as?: Tags;
  ellipsis?: boolean;
  ellipsisMaxRows?: number;
  fontWeight?: 'bold' | 'semibold';
  color?: TColors;
  id?: string;
} & TypographyVariants &
  IWithDataTest;

export type Tags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span';
