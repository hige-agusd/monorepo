import { AccordionBase } from '../base';
import { IWithDataTest } from '../../../common/contracts';
import { Box } from '../../box';
import { Typography } from '../../typography';
import {
  accordionLabelStyle,
  accordionTextStyle,
  accordionTriggerIconStyle,
  accordionTriggerLeftContainerStyle,
  accordionTriggerRightContainerStyle,
  accordionTriggerStyle,
} from './styles.css';

export const AccordionTrigger = ({
  label,
  text = undefined,
  'data-test': dataTest,
}: IAccordionTriggerProps) => (
  <AccordionBase.Header asChild>
    <AccordionBase.Trigger className={accordionTriggerStyle} data-test={dataTest}>
      <Box className={accordionTriggerLeftContainerStyle}>
        <Typography kind='body' fontWeight='bold' classes={accordionLabelStyle} ellipsis>
          {label}
        </Typography>
      </Box>
      {text && (
        <Box className={accordionTriggerRightContainerStyle}>
          <Typography kind='bodySmall' classes={accordionTextStyle}>
            {text}
          </Typography>
        </Box>
      )}
      {/* <ChevronDownIconOutline className={accordionTriggerIconStyle} /> */}
    </AccordionBase.Trigger>
  </AccordionBase.Header>
);

export interface IAccordionTriggerProps extends IWithDataTest {
  label: string;
  text?: string;
}
