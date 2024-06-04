import React from 'react';
import { Meta, Story } from '@storybook/react';

// Import the Button component and its props type
import { ThemeProvider } from '../theme-provider/theme-provider';
import { themeLight } from '../../themes';
import { TestComp } from '.';

// Create a meta description for the story
const meta: Meta = {
  title: 'Components/Test',
  component: TestComp,
  argTypes: {
  },
};

// Export the meta description
export default meta;

// Create a template for the story
const Template: Story<any> = (args) =>
  <ThemeProvider theme={themeLight}>

    <TestComp {...args} />
  </ThemeProvider>

// Define the Primary variant story
export const Default = Template.bind({});