import type { Meta, StoryObj } from '@storybook/react';
import RecentNews from '../components/molecules/RecentNews';

const meta = {
    title: 'Component/RecentNews',
    component: RecentNews,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof RecentNews>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Technology: Story = {
    args: {
        articleTitle: 'Here, I Focus On A Range Of Items And Features',
        articleSlug: 'life',
        authorName: 'Yuki Tsujimura',
        categoryName: 'Technology',
        categoryBackground: 'red',
        excerpt: 'Curabitur egestas est vitae sem blandit tincidunt. Nunc cursus interdum odio sit amet gravida.',
        imageData: { // このデータはサンプルです。実際のデータに置き換えてください。
            slug: 'sample-post',
            featureImg: '/post_1.jpg', // 仮の画像URLです。適切な画像URLに変更してください。
            title: 'Sample Technology Post',
        },
    },
};