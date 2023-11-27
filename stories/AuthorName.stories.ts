import type { Meta, StoryObj } from '@storybook/react';

import AuthorName from '../components/elements/AuthorName';

const meta = {
    title: 'Component/AuthorName',
    component: AuthorName,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof AuthorName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Life: Story = {
    args: {
        authorName: 'Yuki Tsujimura',
    },
};