import { AccordionItemProps, Item as PrimitiveAccordionItem } from '@radix-ui/react-accordion';

export const AccordionItemBase = ({
  isDisabled = false,
  ...restProps
}: IAccordionItemBaseProps) => <PrimitiveAccordionItem {...restProps} disabled={isDisabled} />;

export interface IAccordionItemBaseProps
  extends Pick<AccordionItemProps, 'children' | 'className' | 'value' | 'asChild'> {
  isDisabled?: boolean;
}
