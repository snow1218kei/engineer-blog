import type { Preview } from "@storybook/react";
import '../styles/global.css';
import Image from 'next/image';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

Image.propTypes = {
    unoptimized: null,
};

Image.defaultProps = {
    unoptimized: true,
};

export default preview;

