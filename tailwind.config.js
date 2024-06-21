/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['gtamerica', 'ui-sans-serif', 'system-ui'],
        serif: ['nib', 'ui-serif', 'Georgia'],
      },
      width: {
        'custom-108vw': '108vw',
      },
      maxWidth: {
        'custom-96.5625rem': '96.5625rem',
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '90rem',
        xl: '90rem',
      },
    },
  },
  plugins: [],
};
