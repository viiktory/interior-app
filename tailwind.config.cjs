module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sectionBg: '#e4dbd0',
        background: '#F5F7F8',
        cardBg: '#FFFFFF',
        primary: '#2C3E50',
        secondary: '#D4A373',
        description: '#5F6366',
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
