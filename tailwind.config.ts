import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },

    colors: {
      color: {
        white: '#FCF5ED',
        primary: '#EAD7BB',
        secondary: '#071F36',
        grey: '#F6F1E9',
        navbar: '#071F36',
      },
      whiteTheme: {
        primary: '#FAFAFA',
        secondary: '#F1F8FF',
        tertiary: '#BED1FC',
        quartery: '#7D80C7',
      },
    },
  },
  plugins: [],
};
export default config;
