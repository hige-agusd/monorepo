import React, { forwardRef } from 'react';
import { Box } from '../box';
import { ButtonBase, IDispatchProps as ButtonBaseDispatchProps, IProps as ButtonBaseProps } from './base';
import { buttonContentRecipe, buttonRecipe } from './styles.css';
import { joinClassName } from '../../utils';
import { Typography } from '../typography';
import { IWithDataTest } from '../../common/contracts';
import { Space, VarsBodyFontSize } from '../../themes';

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
function Button(
  {
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
    ...restProps
  },
  ref
) {
  const recipeClasses = buttonRecipe({
    paddingY: paddingY,
    paddingX: paddingX,
    disabled: isDisabled,
  });

  const buttonClassNames = joinClassName([
    getVariantStyles(variant),
    recipeClasses,
    buttonClasses ? buttonClasses : '',
  ]);

  const textClassNames = joinClassName([
    buttonContentRecipe({
      suffixLabelPadding: suffixContent ? prefixSuffixLabelPadding : 'none',
      prefixLabelPadding: prefixContent ? prefixSuffixLabelPadding : 'none',
    }),
    labelClassNames ? labelClassNames : '',
  ]);

  return (
    <ButtonBase
      ref={ref}
      {...restProps}
      variant={variant}
      buttonClasses={joinClassName([buttonClassNames, isLoading && 'loadingButton'])}
      isDisabled={isLoading || isDisabled}
    >
      {isLoading ? renderLoading(loadingImage) : renderContent({textClassNames, children, labelSize, prefixContent, suffixContent})}
    </ButtonBase>
  );
});

const getVariantStyles = (variant: string | undefined) => {
  switch (variant) {
    case 'primary':
      return 'primaryStyles';
    case 'secondary':
      return 'secondaryStyles';
    case 'tertiary':
      return 'tertiaryStyles';
    default:
      return '';
  }
};

const renderLoading = (loadingImage: JSX.Element | undefined) => loadingImage ? loadingImage : <Box>Spinner</Box>;

const renderContent = ({textClassNames, children, labelSize, prefixContent, suffixContent}: Partial<IButtonProps> & {textClassNames: string}) => (
  <>
    {!!prefixContent && prefixContent}
    <Typography classes={textClassNames} as='span' kind={labelSize} color='inherit'>
      {children}
    </Typography>
    {!!suffixContent && suffixContent}
  </>
);

export default Button;

type PrefixSuffixContentPadding = 'S' | 'M' | 'L';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export interface IButtonProps extends ButtonBaseProps, ButtonBaseDispatchProps, IWithDataTest {
  children: React.ReactNode | React.ReactNode[];
  prefixContent?: JSX.Element;
  suffixContent?: JSX.Element;
  isDisabled?: boolean;
  isLoading?: boolean;
  paddingX?: Space;
  paddingY?: Space;
  labelSize?: VarsBodyFontSize;
  prefixSuffixLabelPadding?: PrefixSuffixContentPadding;
  labelClassNames?: string;
  loadingImage?: JSX.Element;
  buttonClasses?: string;
  variant?: ButtonVariant;
}