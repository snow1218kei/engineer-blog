import type { Meta, StoryObj } from '@storybook/react';

import TopStory, {ArticleForTopStory} from '../components/molecules/top-story/TopStory';

const meta = {
    title: 'Component/TopStory',
    component: TopStory ,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof TopStory>;

export default meta;
type Story = StoryObj<typeof meta>;

const dummyArticle: ArticleForTopStory = {
    id: "1",
    title: "Amazing Travel Destinations",
    slug: "amazing-travel-destinations",
    image: {
        title: "Travel Image 1",
        url: "/post_1.jpg",
        slug: "travel-image-1",
        width: 730,
        height: 550,
    },
    authorName: "John Doe",
    postDate: "Jun 02 2022",
    pageView: 1000
}

export const Main: Story = {
    args: {
        ...dummyArticle,
    },
};
