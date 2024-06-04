import { createContext, PropsWithChildren, useContext } from 'react';

interface IAccordionItemContextProps {
  isDisabled: boolean;
}

type IProviderProps = PropsWithChildren<IAccordionItemContextProps>;

const AccordionItemContext = createContext<IAccordionItemContextProps | undefined>(undefined);

export const AccordionItemContextProvider = ({ children, ...props }: IProviderProps) => (
  <AccordionItemContext.Provider value={props}>{children}</AccordionItemContext.Provider>
);

export const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext);

  if (context === undefined) {
    throw new Error('useAccordionItemContext must be used within a AccordionItemContextProvider');
  }

  return context;
};
