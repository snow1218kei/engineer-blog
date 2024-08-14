import type { Meta, StoryObj } from '@storybook/react';
import RecentNewsItem from '@/components/molecules/resent-news-item/ResentNewsItem';

const meta = {
    title: 'Component/RecentNews',
    component: RecentNewsItem,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof RecentNewsItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const exampleArticle = {
    id: '1',
    title: 'Latest in Technology',
    slug: 'latest-in-technology',
    image: {
        title: 'Technology Image',
        url: '/post_1.jpg',
        slug: 'tech-image',
        width: 600,
        height: 400,
    },
    authorName: 'John Doe',
    excerpt: 'Curabitur egestas est vitae sem blandit tincidunt. Nunc cursus interdum odio sit amet gravida.',
    postDate: '2024-08-04',
    pageView: 1200,
};

export const Technology: Story = {
    args: {
        article: exampleArticle,
    },
};