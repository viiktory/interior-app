/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        dm: ['DM Serif Display', 'serif'],
      },
      fontSize: {
        base: '22px',
        title: '80px',
        btn: '18px',
      },
      colors: {
        primary: '#292F36',
        title: '#292F36',
        btnBg: '#292F36',
        btnHover: '#1e1e1e',
      },
      borderRadius: {
        btn: '18px',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
