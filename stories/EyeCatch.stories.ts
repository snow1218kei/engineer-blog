import type { Meta, StoryObj } from '@storybook/react';
import EyeCatch from '../components/elements/EyeCatch';

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
        imageData: { // このデータはサンプルです。実際のデータに置き換えてください。
            slug: 'sample-post',
            featureImg: '/post_1.jpg', // 仮の画像URLです。適切な画像URLに変更してください。
            title: 'Sample Technology Post',
        },
    },
};