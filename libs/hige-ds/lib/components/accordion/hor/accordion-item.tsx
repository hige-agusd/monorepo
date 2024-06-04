import {
  AccordionBase,
  IAccordionItemBaseProps,
} from '../base';
import { AccordionContent } from './accordion-content';
import { AccordionTrigger, IAccordionTriggerProps } from './accordion-trigger';
import { AccordionItemContextProvider } from './accordion-item-context';
import { accordionItemStyle } from './styles.css';

export const AccordionItem = ({
  children,
  isDisabled = false,
  label,
  text = undefined,
  contentDataTest = 'accordion_content',
  triggerDataTest = 'accordion_trigger',
  ...restProps
}: IAccordionItemProps) => {
  const accordionTriggerProps: IAccordionTriggerProps = {
    label,
    text,
    'data-test': triggerDataTest,
  };

  return (
    <AccordionItemContextProvider isDisabled={!!isDisabled}>
      <AccordionBase.Item className={accordionItemStyle} isDisabled={isDisabled} {...restProps}>
        <AccordionTrigger {...accordionTriggerProps} />
        <AccordionContent data-test={contentDataTest}>{children}</AccordionContent>
      </AccordionBase.Item>
    </AccordionItemContextProvider>
  );
};

export interface IAccordionItemProps
  extends Omit<IAccordionItemBaseProps, 'asChild' | 'className'>,
    IAccordionTriggerProps {
  /** test id */
  triggerDataTest?: string;
  contentDataTest?: string;
}
