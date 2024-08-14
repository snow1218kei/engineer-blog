import type {Meta, StoryObj} from "@storybook/react";
import TopStories from "@/components/organisms/top-stories/TopStories";
import {ArticleForTopStory} from "@/components/molecules/top-story/TopStory";

const meta = {
    title: 'Component/TopStories',
    component: TopStories ,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof TopStories>;

export default meta;
type Story = StoryObj<typeof meta>;

const dummyArticles: ArticleForTopStory[] = [
    {
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
    },
    {
        id: "2",
        title: "Exploring the Mountains",
        slug: "exploring-the-mountains",
        image: {
            title: "Travel Image 2",
            url: "/post_1.jpg",
            slug: "travel-image-2",
            width: 730,
            height: 550,
        },
        authorName: "Jane Smith",
        postDate: "Jun 03 2022",
        pageView: 1500
    },
    {
        id: "3",
        title: "City Adventures",
        slug: "city-adventures",
        image: {
            title: "Travel Image 3",
            url: "/post_1.jpg",
            slug: "travel-image-3",
            width: 730,
            height: 550,
        },
        authorName: "Alice Johnson",
        postDate: "Jun 04 2022",
        pageView: 2000
    },
];

export const Main: Story = {
    args: {
        articles: dummyArticles,
    },
};