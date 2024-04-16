/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      'display': ['clamp(2.75rem, 4.25vw, 4.5rem)', {
        lineHeight: '96.5%',
        letterSpacing: '-3.5%',
        fontWeight: '700'
      }],
      'h1': '3.0rem',
      'h2': '2.5rem',
      'h3': '2.0rem',
      'h4': '1.5rem',
      'h5': '1.3rem',
      'h6': '1.25rem',
      'base': '1.125rem',
      'sm': '1rem',
      'xs': '0.875rem',
      'xxs': '0.75rem',
    },
    colors: {
      'transparent': 'transparent',
      'bg': '#0C0D0E',
      'dark-charcoal': '#18181b',
      'dark-gray': '#2F2F32',
      'dim-gray': '#39393C',
      'light-gray': '#878787',
      'gray': '#D1D1D1',
      'accent': '#A6E22E',
      'white': '#F7F8F8',
      'light-grey':'#8a8f98',
      'primary': '#EFECE6',
      'outline': '#D1D1D1',
      'gradient': '#1F1F1F',
      'gradient2': '#070707',
      'gradient3': '#675E4C',
    },
    extend: {
      letterSpacing: {
        'close': '-3.5%',
        'base': '-1%'
      },
      lineHeight: {
        'base': '150%'
      },
      boxShadow: {
        'shine': '0px 0px 58px 20px rgba(85, 85, 85, 0.20);',
        'bright': '0px 0px 58px 20px rgba(85, 85, 85, 0.35);'
      },
      borderOpacity: {
        '15': '0.15'
      },
      transitionTimingFunction: {
        'in-out-circ': 'cubic-bezier(0.85, 0, 0.15, 1)',
      }
    },
  },
  plugins: [
    'prettier-plugin-tailwindcss',
    require('@tailwindcss/container-queries'),
  ],
}

