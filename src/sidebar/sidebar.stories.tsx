import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Sidebar } from './sidebar';

export default {
  title: 'Sidebar',
  component: Sidebar,
} as Meta;

const Template: Story = () => <Sidebar />;

export const Default = Template.bind({});
