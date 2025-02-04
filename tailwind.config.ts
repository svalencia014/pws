import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      cursive: ["Bebas Neue", "cursive"],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;