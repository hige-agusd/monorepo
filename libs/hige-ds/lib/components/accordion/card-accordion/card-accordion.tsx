import {
  AccordionBase,
  IAccordionItemBaseProps,
} from '../base';
import { useState } from 'react';
import { Box } from '../../box';
import {
  cardAccordionTriggerIconStyle,
  cardAccordionTriggerLabelStyle,
  cardAccordionTriggerStyle,
} from './styles.css';

const CARD_ACCORDION_VALUE = 'openAccordion';

export const CardAccordion = ({
  children,
  label,
  isDisabled = false,
  isOpen,
  onChange,
}: ICardAccordionProps) => {
  const [value, setValue] = useState(isOpen ? CARD_ACCORDION_VALUE : undefined);

  const handleOnChange = (newValue: string) => {
    onChange?.(newValue === CARD_ACCORDION_VALUE);
    setValue(newValue);
  };

  return (
    <AccordionBase.Wrapper type='single' isCollapsible value={value} onValueChange={handleOnChange}>
      <AccordionBase.Item value={CARD_ACCORDION_VALUE} isDisabled={isDisabled}>
        <AccordionBase.Content>{children}</AccordionBase.Content>
        <AccordionBase.Trigger className={cardAccordionTriggerStyle}>
          <Box className={cardAccordionTriggerLabelStyle}>{label}</Box>
        </AccordionBase.Trigger>
      </AccordionBase.Item>
    </AccordionBase.Wrapper>
  );
};

export interface ICardAccordionProps
  extends Pick<IAccordionItemBaseProps, 'children' | 'isDisabled'> {
  /**
   * Label of the CardAccordion.
   */
  label: string;
  /**
   * If `true` the accordion will be expanded.
   */
  isOpen?: boolean;
  /**
   * CardAccordion onChange callback.
   */
  onChange?(isOpen: boolean): void;
}
