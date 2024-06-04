import React, { forwardRef, useMemo } from 'react';
import { Space, VarsBodyFontSize } from '../../themes';
import { joinClassName } from '../../utils';
import { Typography } from '../typography';
import {
  ButtonBase,
  IDispatchProps as ButtonBaseDispatchProps,
  IProps as ButtonBaseProps,
} from './base';
import { buttonContentRecipe, buttonRecipe } from './styles.css';
import { IWithDataTest } from '../../common/contracts';
import { TButtonVariant } from './shared-types';
import classNames from 'classnames';
import { Box } from '../box';

/**
 * ReX Rounded Corner Button
 * Eye-Catching & distinguishable
 * Figma: https://www.figma.com/file/oQlkZ58KasBV5ohhLvdOJ3/Buttons-%26-Links?node-id=5432%3A446
 */
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export const Button = forwardRef(function Button(
  props: IButtonProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  const {
    children,
    prefixContent,
    suffixContent,
    isDisabled,
    isLoading,
    paddingX = 'spacing20',
    paddingY = 'spacing16',
    labelSize,
    prefixSuffixLabelPadding,
    labelClassNames,
    loadingImage,
    buttonClasses,
    variant,
    status,
    'data-test': dataTest,
  } = props;
  // const recipeClasses = buttonRecipe({
  //   paddingY: paddingY,
  //   paddingX: paddingX,
  //   disabled: isDisabled,
  // });
  const buttonClassNames = useMemo(
    () =>
      classNames(
        buttonRecipe({ variant, status, paddingX, paddingY }),
        buttonClasses
      ),
    [buttonRecipe, buttonClasses, variant, status, paddingX, paddingY]
  );

  // const textClassNames = useMemo(
  //   () => getLabelClassNames(props),
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [prefixContent, suffixContent, prefixSuffixLabelPadding, labelClassNames]
  // );

  const textClassNames = buttonContentRecipe({
    suffixLabelPadding: suffixContent ? prefixSuffixLabelPadding : 'none',
    prefixLabelPadding: prefixContent ? prefixSuffixLabelPadding : 'none',
  });

  const loading = loadingImage ? loadingImage : '☻';

  return (
    <ButtonBase
      ref={ref}
      {...props}
      buttonClasses={buttonClassNames}
      isDisabled={isLoading || isDisabled}
      data-test={dataTest}
    >
      {isLoading ? (
        loading
      ) : (
        <Box display="flex" >
          {!!prefixContent && prefixContent}
          <Typography classes={textClassNames} as="span" kind={labelSize} color='unset'>
            {children}
          </Typography>
          {!!suffixContent && suffixContent}
        </Box>
      )}
    </ButtonBase>
  );
});

// CSS Classes

export const getLabelClassNames = ({
  prefixContent,
  suffixContent,
  prefixSuffixLabelPadding = 'M',
  labelClassNames,
}: IButtonProps) =>
  joinClassName([
    buttonContentRecipe({
      suffixLabelPadding: suffixContent ? prefixSuffixLabelPadding : 'none',
      prefixLabelPadding: prefixContent ? prefixSuffixLabelPadding : 'none',
    }),
    labelClassNames,
  ]);

// Interfaces
export type IButtonProps = ButtonProps &
  ButtonBaseProps &
  ButtonBaseDispatchProps;

export type PrefixSuffixContentPadding = 'S' | 'M' | 'L';

export interface ButtonProps extends IWithDataTest {
  variant: TButtonVariant;
  // Specify padding to be applied in the left and right sides of the component
  paddingX: Space;
  // Specify padding to be applied in the top and the bottom of the component
  paddingY: Space;
  // Specify label size
  labelSize: VarsBodyFontSize;
  // Allows extra customization of font-related CSS
  labelClassNames?: string;
  // Specify the prefix Icon
  prefixContent?: JSX.Element;
  // Specify the suffix Icon
  suffixContent?: JSX.Element;
  // Specify the space in between the icons (suffix / prefix) and the label
  prefixSuffixLabelPadding?: PrefixSuffixContentPadding;
  // Specify the loading image
  loadingImage?: JSX.Element;
  status: 'warning' | 'info' | 'success' | 'danger' | 'default';
}
