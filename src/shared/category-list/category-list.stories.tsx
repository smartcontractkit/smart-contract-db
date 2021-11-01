import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CategoryList } from './category-list';
import * as books from '@/data/resources/education/books.json';

export default {
  title: 'CategoryList',
  component: CategoryList,
} as Meta;

const Template: Story = () => <CategoryList data={books[0]} />;

export const Default = Template.bind({});
