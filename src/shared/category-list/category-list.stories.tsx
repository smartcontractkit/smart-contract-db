import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CategoryList } from './category-list';
import { books } from '@/data/resources/education/books';

export default {
  title: 'CategoryList',
  component: CategoryList,
} as Meta;

const Template: Story = () => <CategoryList data={books} />;

export const Default = Template.bind({});
