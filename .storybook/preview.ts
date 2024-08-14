import type {Preview, Story} from "@storybook/react";
import '../styles/global.css';
import { Poppins, Roboto } from '@next/font/google';
import Image from 'next/image';
import React from "react";
import PropTypes from "prop-types";

const poppins = Poppins({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',  // カスタムプロパティを使用
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',  // カスタムプロパティを使用
});

const googleFontsDecorator = (Story: any) => {
  return React.createElement(
      'div',
      {
        className: `${poppins.variable} ${roboto.variable}`,
        style: { fontFamily: 'var(--font-poppins), var(--font-roboto)' }
      },
      React.createElement(Story)
  );
};

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
  decorators: [googleFontsDecorator],
};

Image.propTypes = {
  unoptimized: PropTypes.bool,
};

Image.defaultProps = {
    unoptimized: true,
};

export default preview;

