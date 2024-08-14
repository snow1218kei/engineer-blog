import type {Meta, StoryObj} from "@storybook/react";
import AuthorIntroduction from "@/components/molecules/author-introduction/AuthorIntroduction";

const meta = {
    title: 'Component/AuthorIntroduction',
    component: AuthorIntroduction,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof AuthorIntroduction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};