export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#292F36',
        secondary: '#4D5053',
        white: '#ffffff',
        bg: '#ffffff',
        btn: '#292F36',
        'btn-hover': '#CDA274',
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
      },
      fontSize: {
        titleHome: '80px',
        title: '50px',
        cartTitle: '26px',
        base: '22px',
        link: '18px',
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
