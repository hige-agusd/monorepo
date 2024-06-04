import {
  AccordionBase,
  IAccordionContentBaseProps,
} from '../base/';
import { IWithDataTest } from '../../../common/contracts';
import { Box } from '../../box';
import { accordionContentStyle } from './styles.css';

export const AccordionContent = ({ children, 'data-test': dataTest }: IAccordionContentProps) => (
  <AccordionBase.Content data-test={dataTest} asChild>
    <Box className={accordionContentStyle}>{children}</Box>
  </AccordionBase.Content>
);

export type IAccordionContentProps = Pick<IAccordionContentBaseProps, 'children'> & IWithDataTest;
