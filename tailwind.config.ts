import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'blue-bell': {
          '50': '#f3f5fa',
          '100': '#eaedf5',
          '200': '#d8dded',
          '300': '#c0c8e1',
          '400': '#a6add3',
          '500': '#9397c7',
          '600': '#7877b4',
          '700': '#66659d',
          '800': '#54547f',
          '900': '#484967',
          '950': '#2a2a3c',
        },
        'deep-cove': {
          '50': '#ecf3ff',
          '100': '#dde8ff',
          '200': '#c1d3ff',
          '300': '#9cb6ff',
          '400': '#748cff',
          '500': '#5465ff',
          '600': '#353af6',
          '700': '#2829da',
          '800': '#2326b0',
          '900': '#25298a',
          '950': '#131446',
        },
        'gun-powder': {
          '50': '#f5f6f9',
          '100': '#e7e9f2',
          '200': '#d5d8e8',
          '300': '#b8bfd8',
          '400': '#969fc4',
          '500': '#7c83b5',
          '600': '#6a6da6',
          '700': '#5e5e97',
          '800': '#52517c',
          '900': '#3e3e5c',
          '950': '#2c2c3f',
        },
        'quicksand': {
          '50': '#faf7f6',
          '100': '#f4edec',
          '200': '#ecdedc',
          '300': '#ddc8c4',
          '400': '#c29c95',
          '500': '#b38880',
          '600': '#9c6e66',
          '700': '#825a53',
          '800': '#6d4d47',
          '900': '#5d443f',
          '950': '#30221f',
        },
        'flax': {
          '50': '#fdfced',
          '100': '#f7f3ce',
          '200': '#efe698',
          '300': '#eadb7a',
          '400': '#e0c33f',
          '500': '#d8a928',
          '600': '#bf8520',
          '700': '#9f631e',
          '800': '#824e1e',
          '900': '#6b411c',
          '950': '#3d210b',
        },

      }
    },
  },
  plugins: [],
};

export default config;
