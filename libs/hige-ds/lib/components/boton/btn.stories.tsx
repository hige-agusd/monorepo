// Import the necessary modules from Storybook and React
import React from 'react';
import { Meta, Story } from '@storybook/react';

// Import the Button component and its props type
import {Button, IButtonProps } from './button';
import { ThemeProvider } from '../theme-provider/theme-provider';
import { themeLight } from '../../themes';
import { Typography } from '../typography';

// Create a meta description for the story
const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
    },
  },
};

// Export the meta description
export default meta;

interface IButtonStoryProps extends IButtonProps {
  showPrefix: boolean;
  showSuffix: boolean;
};

// Create a template for the story
const Template: Story<IButtonStoryProps> = (args) => {
    const buttonProps = {
  ...(args.showPrefix ? { prefixContent: <span>♥</span> } : {}),
  ...(args.showSuffix ? { suffixContent: <span>☻</span> } : {}),
};
    return <Button {...args} {...buttonProps} />
}
// Define the Primary variant story
export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
  status: 'success',
  showPrefix: false,
  showSuffix: false,
};

