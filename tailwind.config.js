/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', 'node_modules/flowbite-react/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primaryGreen: '#97bf0f',
        primaryDark: '#151515',
        primaryGrey: '#c2c2c2',
        primaryGreenDark: '#88af05',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
