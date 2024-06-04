import React from "react";
import { getThemeClasses} from '../libs/hige-ds/lib/utils'
import { ThemeProvider } from "../libs/hige-ds/lib/components";

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      {
        name: 'white',
        value: '#ffffff',
      },
      {
        name: 'light',
        value: '#f7f7f7',
      },
      {
        name: 'dark',
        value: '#777777',
      },
    ],
  },
  options: {
    storySort: {
      order: ['Intro', 'Design System', 'Components', '*', 'WIP'],
    },
  },
};

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'ja', title: '日本語' },
      ],
    },
  },
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'hige',
    toolbar: {
      icon: 'photo',
      items: ['hige'],
    },
  },
};

export const decorators = [
  (Story, { globals }) => {
    const themeClasses = getThemeClasses(globals?.theme);

    return (
      <ThemeProvider theme={themeClasses}>
        <div data-test='wrapper-playwright' style={{ padding: '1px', width: 'fit-content' }}>
          <Story />
        </div>
      </ThemeProvider>
    );
  },
];
