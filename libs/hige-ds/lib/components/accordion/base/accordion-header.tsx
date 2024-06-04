import {
  AccordionHeaderProps,
  Header as PrimitiveAccordionHeader,
} from '@radix-ui/react-accordion';

export const AccordionHeaderBase = ({ ...restProps }: IAccordionHeaderBaseProps) => (
  <PrimitiveAccordionHeader {...restProps} />
);

export type IAccordionHeaderBaseProps = Pick<AccordionHeaderProps, 'children' | 'asChild'>;
