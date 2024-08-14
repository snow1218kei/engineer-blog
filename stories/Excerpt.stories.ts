import type { Meta, StoryObj } from '@storybook/react';

import Excerpt from '../components/elements/article-excerpt/Excerpt';

const meta = {
    title: 'Component/Excerpt',
    component: Excerpt,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Excerpt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Life: Story = {
    args: {
        excerpt: 'Curabitur egestas est vitae sem blandit tincidunt. Nunc cursus interdum odio sit amet gravida.',
    },
};