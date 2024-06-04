import {
  AccordionTriggerProps,
  Trigger as PrimitiveAccordionTrigger,
} from '@radix-ui/react-accordion';
import { IWithDataTest } from 'libs/hige-ds/lib/common/contracts';
import { ForwardedRef, forwardRef } from 'react';

export const AccordionTriggerBase = forwardRef(
  ({ ...restProps }: IAccordionTriggerBaseProps, ref: ForwardedRef<HTMLButtonElement>) => (
    <PrimitiveAccordionTrigger {...restProps} ref={ref} />
  )
);

AccordionTriggerBase.displayName = 'AccordionTriggerBase';

export type IAccordionTriggerBaseProps = Pick<
  AccordionTriggerProps,
  'children' | 'className' | 'asChild' | 'tabIndex'
> &
  IWithDataTest;
