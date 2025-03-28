module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  safelist: ['font-sans', 'font-serif', 'text-primary', 'bg-btn', 'hover:bg-btn-hover'],
  theme: {
    extend: {
      colors: {
        primary: '#292F36',
        secondary: '#4D5053',
        white: '#ffffff',
        bg: '#ffffff',
        btn: '#292F36',
        'btn-hover': '#1e1e1e',
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
      },
      fontSize: {
        base: '22px',
        title: '80px',
        btn: '18px',
      },
      borderRadius: {
        btn: '18px',
      },
      maxWidth: {
        container: '1200px',
      },
      spacing: {
        safe: '20px',
      },
    },
  },
  plugins: [],
}
