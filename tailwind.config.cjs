module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f0f0f0',
        primary: '#292F36',
        secondary: '#CDA274',
        description: '#4D5053',
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
      },
      fontSize: {
        titleHome: '75px',
        title: '50px',
        cartTitle: '26px',
        base: '22px',
        link: '18px',
      },
      height: {
        header: '100px',
      },
      maxWidth: {
        container: '1440px',
      },
      spacing: {
        safe: '20px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-in',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
