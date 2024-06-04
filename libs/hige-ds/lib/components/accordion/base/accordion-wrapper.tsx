import {
  AccordionMultipleProps,
  AccordionSingleProps,
  Root as PrimitiveAccordionRoot,
} from '@radix-ui/react-accordion';
import { ReactNode } from 'react';

export const AccordionWrapperBase = ({
  type = 'single',
  isDisabled = false,
  isCollapsible = false,
  children,
  ...restProps
}: IAccordionWrapperBaseProps) => (
  <PrimitiveAccordionRoot
    {...(type === 'single'
      ? ({ ...restProps, type, collapsible: isCollapsible } as AccordionSingleProps)
      : ({ ...restProps, type } as AccordionMultipleProps))}
    disabled={isDisabled}
  >
    {children}
  </PrimitiveAccordionRoot>
);

export type IAccordionWrapperBaseProps = (
  | Pick<AccordionSingleProps, 'type' | 'defaultValue' | 'value' | 'onValueChange'>
  | Pick<AccordionMultipleProps, 'type' | 'defaultValue' | 'value' | 'onValueChange'>
) & {
  children?: ReactNode;
  isDisabled?: boolean;
  isCollapsible?: boolean;
};
