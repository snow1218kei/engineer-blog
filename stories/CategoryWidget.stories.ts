import CategoryWidget from "@/components/molecules/categories/CategoryWidget";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: 'Component/CategoryWidget',
    component: CategoryWidget,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof CategoryWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {},
};
