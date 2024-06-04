/* eslint-disable prefer-arrow/prefer-arrow-functions */
import React, { ElementType, forwardRef, useCallback, useMemo } from 'react';
import { IWithDataTest } from '../../common/contracts';
import { joinClassName } from '../../utils';
import { Box } from '../box';
import {
  A11y,
  AnchorRel,
  AnchorTarget,
  BorderRadius,
  BorderRadiusOption,
  NoBorder,
  Shape,
} from './shared-types';
import {
  borderRadiusBottomLeftStyle,
  borderRadiusBottomRightStyle,
  borderRadiusStyle,
  borderRadiusTopLeftStyle,
  borderRadiusTopRightStyle,
  buttonBaseRecipe,
} from './styles.css';

const getBorderRadiusStyles = (borderRadius?: BorderRadius, isRounded?: boolean): string[] => {
  if (isRounded) {
    return [];
  }

  // Default border-radius class that adds radius to all the corners
  if (!borderRadius) {
    return [borderRadiusStyle];
  }

  const optionToStyle: Record<BorderRadiusOption, string> = {
    all: borderRadiusStyle,
    topLeft: borderRadiusTopLeftStyle,
    topRight: borderRadiusTopRightStyle,
    bottomLeft: borderRadiusBottomLeftStyle,
    bottomRight: borderRadiusBottomRightStyle,
    none: '',
  };

  if (typeof borderRadius === 'string') {
    return [optionToStyle[borderRadius]];
  }

  return borderRadius.map((option) => optionToStyle[option]);
};

// eslint-disable-next-line sonarjs/cognitive-complexity
const getTagAccessibilityProps = (props: IProps) => {
  const { href, isActive, isDisabled, rel, title, target = '_self', a11y, to } = props;

  if (href || to) {
    const linkProps = href ? { href } : { to }; // href to take precedence
    return {
      ...linkProps,
      target,
      title,
      rel,
      'aria-disabled': isDisabled ? true : undefined,
      'aria-pressed': isActive ? true : undefined,
      role: a11y && a11y.role,
      tabIndex: (a11y && a11y.tabindex) || 0,
    };
  }

  return {
    type: 'button',
    disabled: isDisabled,
  };
};

/**
 * @deprecated Usage of ButtonBase is prohibited outside of Button scope
 */
// eslint-disable-next-line sonarjs/cognitive-complexity
export const ButtonBase = forwardRef(function ButtonRoot(
  props: IProps & IDispatchProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  const {
    href,
    children,
    component,
    isDisabled,
    isLoading,
    a11y,
    onClick,
    onMouseEnter,
    onKeyDown,
    block,
    borderRadius,
    buttonClasses,
    noBorder,
    noPadding,
    shape,
    passThroughProps = [],
    'data-test': dataTest,
  } = props;
  console.log(props);
  
  const isLink = !!href && href !== '';
  let componentTag: ElementType = 'button' as keyof JSX.IntrinsicElements;

  if (isLink) {
    componentTag = 'a' as keyof JSX.IntrinsicElements;
  }

  if (component) {
    componentTag = component;
  }

  const recipeClases = buttonBaseRecipe({
    block,
    disabled: isDisabled,
    noPadding,
    noBorder,
    shape,
  });
  const classNames = useMemo(
    () =>
      joinClassName(
        [
          recipeClases,
          ...getBorderRadiusStyles(borderRadius, shape === 'pill' || shape === 'circle'),
          buttonClasses, // Custom Classes
        ].filter(Boolean)
      ),
    [borderRadius, buttonClasses, shape, recipeClases]
  );

  const handleBtnClick = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
      if (isDisabled || isLoading || !onClick) return;
      onClick(event);
    },
    [onClick, isDisabled, isLoading]
  );

  const onKeyDownHandler = useCallback(
    (event: React.KeyboardEvent<HTMLElement>): void => {
      if (isDisabled || isLoading) return;
      // Check to see if space or enter were pressed
      if (event.key !== ' ' && event.key !== 'Enter' && event.key !== 'Spacebar') return;
      // "Spacebar" for IE11 support
      // Prevent the default action to stop scrolling when space is pressed
      event.preventDefault();
      onKeyDown
        ? onKeyDown(event)
        : onClick && onClick(event as unknown as React.MouseEvent<HTMLElement, MouseEvent>);
    },
    [onClick, onKeyDown, isDisabled, isLoading]
  );

  const onMouseEnterHandler = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      !!onMouseEnter && onMouseEnter(event);
    },
    [onMouseEnter]
  );

  // This event is added for specific cases on safary when the button is outlines after the click
  const onFocusOut = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (ref as any)?.current?.blur();
  }, [ref]);
  const childrenToLabel = typeof children === 'string' ? children : '';
  const buttonProps = {
    'aria-label':
      href && (!a11y || (a11y && !a11y.ariaLabel))
        ? undefined
        : (a11y && a11y.ariaLabel) || childrenToLabel,
    onClick: onClick && handleBtnClick,
    onKeyDown: onKeyDown && onKeyDownHandler,
    onMouseEnter: onMouseEnter && onMouseEnterHandler,
    onMouseUp: onFocusOut,
    onDragEnd: onFocusOut,
    ...getTagAccessibilityProps(props),
  };

  let propsToPassThrough = {};
  passThroughProps.forEach((prop) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    propsToPassThrough = { ...propsToPassThrough, [prop]: props[prop] };
  });

  return (
    <Box
      as={componentTag}
      ref={ref}
      className={classNames}
      {...buttonProps}
      {...propsToPassThrough}
      data-test={dataTest}
    >
      {children}
    </Box>
  );
});

export interface IProps extends IWithDataTest {
  /* Extra CSS classes to customize layout of the button */
  buttonClasses?: string;
  /** [For link] If a different component  other than `a` is required, pass a different component. */
  component?: ElementType;
  /** [For link] Redirect link if a `component` prop is applied */
  to?: string;
  /* Anchor link href (converts the button into anchor) */
  href?: string;
  /**
   * https://www.w3schools.com/jsref/prop_anchor_target.asp
   * Behavior when opening the href when href is defined
   */
  target?: AnchorTarget;
  title?: string;
  /**
   * https://www.w3schools.com/tags/att_a_rel.asp
   * The rel attribute specifies the relationship between the current document and
   * the linked document when the href is defined.
   * Search engines can use this attribute to get more information about a link.
   */
  rel?: AnchorRel;
  children?: React.ReactNode | React.ReactNode[];
  isActive?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  /* Displays component as block taking all the parent width */
  block?: boolean;
  noPadding?: boolean;
  noBorder?: NoBorder;
  borderRadius?: BorderRadius;
  shape?: Shape;
  a11y?: A11y;
  // List of props to pass through to the button base. This should currently only be used to pass in props from radix-ui-based components that uses the ReX button components.
  passThroughProps?: string[];
}

export interface IDispatchProps {
  // Handles the event raised when the button is activated using a mouse click or touch event
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  // Handles the event raised when the button is activated using the Enter or Space key on the keyboard.
  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
  // Handles the event raised when the button is being hovered
  onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void;
}
