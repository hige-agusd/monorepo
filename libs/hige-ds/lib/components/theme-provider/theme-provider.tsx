import { ForwardedRef, ReactNode, createContext, forwardRef, useContext } from 'react';

export interface Props {
  children: ReactNode;
  theme: string;
}

const ThemeContext = createContext<string>('');

export const ThemeProvider = ({ children, theme }: Props) => (
  <ThemeContext.Provider value={theme}>
    <div style={{ height: '100%' }} className={`${theme}`}>
      {children}
    </div>
  </ThemeContext.Provider>
);

/**
 * A component used to wrap the children of a portal to allow the children to use the theme.
 *
 * Usage:
 * ```
 * <HypotheticalPortalComponent>
 *   <PortalThemer>
 *     Hello there!
 *   </PortalThemer>
 * </HypotheticalPortalComponent>
 * ```
 *
 * You might need this because a portal renders its children by inserting the contents at the end
 * of the document body (for example). Then the portal contents would be outside of the div rendered
 * by ThemeProvider which provides all the theme variables.
 *
 * This must be a descendent of a ThemeProvider in the React component tree.
 */
export const PortalThemer = forwardRef(
  ({ children }: { children: ReactNode }, ref: ForwardedRef<HTMLDivElement>) => {
    const theme = useContext(ThemeContext);

    if (typeof theme !== 'string') {
      throw new Error('PortalThemer must be used inside ThemeContext.');
    }

    return (
      <div className={`${theme}`} ref={ref}>
        {children}
      </div>
    );
  }
);

PortalThemer.displayName = 'PortalThemer';
