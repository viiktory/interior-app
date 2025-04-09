export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#292F36',
        secondary: '#4D5053',
        white: '#ffffff',
        bg: '#ffffff',
        bgBeige: '#E2D3C4',
        btn: '#292F36',
        'btn-hover': '#A5927C',
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
      borderRadius: {
        btn: '18px',
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
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(-100%)', opacity: 0 },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
