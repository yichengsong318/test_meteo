module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      fontFamily: {
        nexa: ["'Nexa'", 'sans-serif'],
        lato: ["'Lato'", 'sans-serif'],
        national: ["'National'", 'sans-serif']
      },
      backgroundImage: {},
      backgroundSize: {
        '100%': '100% 100%'
      },
      fontSize: {
        h1: ['2.375rem', '3.625rem'], //    [ 38px, 58px ]
        h2: ['1.625rem', '2.4375rem'], //    [ 26px, 39px ]
        h3: ['1.25rem', '1.875rem'], //   [ 20px, 30px ]
        h4: ['1rem', '1.5rem'], //    [ 16px, 24px ]
        p1: ['2.25rem', '2.6875rem'], //   [ 36px, 43px ]
        p2: ['1.5rem', '1.8125rem'], //    [ 24px, 29px ]
        p3: ['1.25rem', '1.5rem'], //   [ 20px, 24px ]
        p4: ['1.125rem', '1.375rem'], //    [ 18px, 22px ]
        p5: ['1rem', '1.1875rem'], //    [ 16px, 19px ]
        p6: ['0.875rem', '1.0625rem'] //   [ 14px, 17px ]
      },
      colors: {
        gray: {
          100: '#EBECEF',
          200: '#CED1D9',
          300: '#B5B9C6',
          400: '#848CA1',
          500: '#6E7179',
          600: '#373B46',
          main: '#56606D'
        },
        orange: {
          100: '#FFFAF8',
          200: '#FFE8DE',
          300: '#F1B78C',
          400: '#FEA57C',
          500: '#FE8E5B',
          600: '#E98234',
          700: '#E27019',
          800: '#CF5C10'
        },
        purple: {
          100: '#E4E3F3',
          200: '#9491D1',
          300: '#7975C5',
          400: '#5B2990',
          500: '#521395',
          main: '#2C3849'
        },
        red: {
          100: '#FFD8D8',
          200: '#FF9D9D',
          300: '#FF3B3B'
        },
        yellow: {
          100: '#FDFCF5',
          200: '#FDED72',
          300: '#F4E466',
          400: '#F8C110',
          500: '#F3BA00'
        },
        green: {
          100: '#EEFBF5',
          200: '#06C270',
          300: '#0AB76B',
          400: '#0A805C',
          500: '#00704E'
        },
        blue: {
          100: '#FAFDFE',
          200: '#CCE7F4',
          300: '#B0DEF3',
          400: '#0045F7',
          500: '#003EDE'
        },
        lightLayout: '#F9FBFC',
        darkLayout: '#192838',
        darkSidebar: '#1F2D44',
        lightLanding: '#EAE7E2',
        hoverNavItem: '#DDD9D5',
        coolPurple: '#4E2ADD'
      },
      keyframes: {
        'left-moving': {
          '0%': {
            transform: 'translateX(0) translateZ(0px)'
          },
          '100%': {
            transform: 'translateX(-75%) translateZ(0px)'
          }
        },
        'right-moving': {
          '0%': {
            transform: 'translateX(-75%) translateZ(0px)'
          },
          '100%': {
            transform: 'translateX(0) translateZ(0px)'
          }
        }
      },
      animation: {
        'slow-infinite-move-left': 'left-moving 50s linear 0s infinite alternate',
        'slow-infinite-move-right': 'right-moving 50s linear 0s infinite alternate'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
