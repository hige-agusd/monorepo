import { AccordionContentBase } from './accordion-content';
import { AccordionHeaderBase } from './accordion-header';
import { AccordionItemBase } from './accordion-item';
import { AccordionTriggerBase } from './accordion-trigger';
import { AccordionWrapperBase } from './accordion-wrapper';

export type { IAccordionContentBaseProps } from './accordion-content';
export type { IAccordionHeaderBaseProps } from './accordion-header';
export type { IAccordionItemBaseProps } from './accordion-item';
export type { IAccordionTriggerBaseProps } from './accordion-trigger';
export type { IAccordionWrapperBaseProps } from './accordion-wrapper';

export const AccordionBase = {
  Wrapper: AccordionWrapperBase,
  Item: AccordionItemBase,
  Header: AccordionHeaderBase,
  Trigger: AccordionTriggerBase,
  Content: AccordionContentBase,
};
