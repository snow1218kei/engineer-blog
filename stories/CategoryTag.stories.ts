import type { Meta, StoryObj } from '@storybook/react';

import CategoryTag from '../components/elements/category-tag/CategoryTag';

const meta = {
    title: 'Component/CategoryTag',
    component: CategoryTag ,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof CategoryTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Technology: Story = {
    args: {
        categoryName: 'Technology',
    },
};

export const Travel: Story = {
    args: {
        categoryName: 'Travel',
    },
};