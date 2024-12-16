/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '100dvw': '100dvw',
        '90dvw': '90dvw',
        '80dvw': '80dvw',
      },
    },
  },
  plugins: [],
}