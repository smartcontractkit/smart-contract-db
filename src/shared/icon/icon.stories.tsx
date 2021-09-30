import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Icon, IconProps } from './icon';

const iconProps = {
  color: 'black',
  size: 32,
};

const Template: Story<IconProps & { name: string }> = (args) => <Icon {...args} />;

export const LongArrowUp = Template.bind({});
LongArrowUp.args = {
  name: 'long-arrow-up',
  ...iconProps,
};

export default {
  title: 'Shared/Icon',
} as Meta;
