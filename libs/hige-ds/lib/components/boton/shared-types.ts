/* eslint-disable no-unused-vars */
export interface SharedProps {
  /* Anchor link href (converts the button into anchor) */
  href?: string;
  /**
   * https://www.w3schools.com/jsref/prop_anchor_target.asp
   * Behavior when opening the href when href is defined
   */
  target?: AnchorTarget;
  /**
   * https://www.w3schools.com/tags/att_a_rel.asp
   * The rel attribute specifies the relationship between the current document and
   * the linked document when the href is defined.
   * Search engines can use this attribute to get more information about a link.
   */
  rel?: AnchorRel;
  children?: string;
  status?: Status;
  //   size?: Size;
  /* Displays component as block taking all the parent width */
  block?: boolean;
  // Animates suffixIcon
  //   animateSuffixOnClick?: boolean;
  noPadding?: boolean;
  noBorder?: NoBorder;
  //   prefixIcon?: IconType;
  //   suffixIcon?: IconType;
  borderRadius?: BorderRadius;
  shape?: Shape;
  /** RAT tracking */
  //   buttonTrackerProps?: Partial<TrackerProps>;
  a11y?: A11y;
  // Handles the event raised when the button is activated using a mouse click or touch event
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  // Handles the event raised when the button is activated using the Enter or Space key on the keyboard.
  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
  // Handles the event raised when the button is being hovered
  onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface DispatchProps {
  // Handles the event raised when the button is activated using a mouse click or touch event
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  // Handles the event raised when the button is activated using the Enter or Space key on the keyboard.
  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
  // Handles the event raised when the button is being hovered
  onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface ButtonSharedState {
  suffixAnimation: Boolean;
  showIconAnimation: boolean;
  showButtonContentAnimation: boolean;
}

// No border right and bottom is a special case for when used by ds-button-group or when grouping ds-buttons
export type NoBorder = 'all' | 'none' | 'right' | 'bottom';

export type AnchorTarget = '_blank' | '_self' | '_parent' | '_top' | 'framename';

export type AnchorRel =
  | 'alternate'
  | 'author'
  | 'bookmark'
  | 'external'
  | 'help'
  | 'license'
  | 'next'
  | 'nofollow'
  | 'noreferrer'
  | 'noopener'
  | 'prev'
  | 'search'
  | 'tag';

/**
 * Applies border-radius css property to the selected borders
 */
export type BorderRadius = BorderRadiusOption | BorderRadiusOption[];

export type BorderRadiusOption =
  | 'all'
  | 'none'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight';

  export type ButtonStatus = 'info' | 'success' | 'warning' | 'danger';

  export type Size = 'S' | 'M';
  
  export type Status = 'default' | 'disabled' | 'active' | 'loading';

export type Shape = 'default' | 'pill' | 'circle';

export interface A11y {
  role?: 'button';
  /**
   * Specify what the button does
   * https://a11y-101.com/development/aria-label
   */
  ariaLabel?: string;
  /**
   * Used in Link Buttons to indicate that the element can be focused by a sequential
   * keyboard navigation (usually with the Tab key)
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
   */
  tabindex?: number;
}

export type TButtonVariant = 'primary'|'secondary'|'tertiary';