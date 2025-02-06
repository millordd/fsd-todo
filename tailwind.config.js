/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts}'],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [
    ({ addBase }) => {
      addBase({
        html: {
          fontFamily: 'fontAlsHauss',
        },
      });
    },
  ],
};
