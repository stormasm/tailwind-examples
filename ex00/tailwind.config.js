/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // include all rust, html and css files in the src directory
    "./src/**/*.{rs,html,css}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
