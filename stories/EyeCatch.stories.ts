import type { Meta, StoryObj } from '@storybook/react';
import EyeCatch from '@/components/elements/eye-catch/EyeCatch';

const meta = {
    title: 'Component/EyeCatch',
    component: EyeCatch ,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof EyeCatch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Technology: Story = {
    args: {
        image: {
            slug: '#',
            url: '/post_1.jpg',
            title: 'Sample Technology Post',
            width: 730,
            height: 550,
        },
        isHovered: false,
    },
};