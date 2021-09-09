import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Header } from './header';

export default {
  title: 'Header',
  component: Header,
} as Meta;

const Template: Story = () => <Header />;

export const Default = Template.bind({});
