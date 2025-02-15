import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        themeColor: '#3E4CF7',
        backgroundColor: '#F9F9F9',
        orColor: '#d9d9d9',
      },
    },
  },
  plugins: [],
};
export default config;
