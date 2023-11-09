/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bgColor: "rgb(var(--color-bgColor) / <alpha-value>)",
        contentColor: "rgb(var(--color-contentColor) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
