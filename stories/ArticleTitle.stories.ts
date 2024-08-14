import type { Meta, StoryObj } from '@storybook/react';

import ArticleTitle, {ParentComponent} from '../components/elements/article-title/ArticleTitle';

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
        articleTitle: 'World Travel Holdings Will Be Honored Alongside Other Recipient',
        articleSlug: 'life',
        parentComponent: ParentComponent.TopStory,
    },
};