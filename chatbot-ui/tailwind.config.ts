// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#242E35',
        primary: '#1241A9',
        secondary: '#3B82F6', // Added a lighter blue that pairs well with the primary
        accent: '#6366F1',    // Added a purple-blue that complements the theme
      },
    },
  },
  plugins: [],
};

export default config;