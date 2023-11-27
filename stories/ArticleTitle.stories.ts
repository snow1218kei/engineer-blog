import type { Meta, StoryObj } from '@storybook/react';

import ArticleTitle from '../components/elements/ArticleTitle';

const meta = {
    title: 'Component/ArticleTitle',
    component: ArticleTitle,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ArticleTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Life: Story = {
    args: {
        articleTitle: 'Here, I Focus On A Range Of Items And Features',
        articleSlug: 'life',
    },
};