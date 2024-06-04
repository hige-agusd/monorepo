import {
  AccordionContentProps,
  Content as PrimitiveAccordionContent,
} from '@radix-ui/react-accordion';
import { IWithDataTest } from 'libs/hige-ds/lib/common/contracts';

export const AccordionContentBase = ({ ...restProps }: IAccordionContentBaseProps) => (
  <PrimitiveAccordionContent {...restProps} />
);

export type IAccordionContentBaseProps = Pick<AccordionContentProps, 'children' | 'asChild'> &
  IWithDataTest;
