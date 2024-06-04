import {
  AccordionBase,
  IAccordionWrapperBaseProps,
} from '../base';
import { TAny } from '../../../common/contracts';

export const AccordionWrapper = ({
  type = 'single',
  children,
  defaultValue,
  value,
  onValueChange,
  ...restProps
}: IAccordionWrapperProps) => (
  <AccordionBase.Wrapper
    type={type}
    defaultValue={defaultValue as TAny}
    value={value as TAny}
    onValueChange={onValueChange as TAny}
    {...restProps}
  >
    {children}
  </AccordionBase.Wrapper>
);

export type IAccordionWrapperProps = IAccordionWrapperBaseProps;
