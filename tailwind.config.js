/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue, js, ts, jsx, tsx}'],
  theme: {
    screens: {
      phone: { max: '36rem' },
      'tablet-pt': '48rem',
      'tablet-ld': '62rem',
      desktop: '75rem',
      'large-desktop': '92.5rem'
    },
    spacing: {
      none: '0px',
      xsm: '.25rem', // 4
      sm: '.5rem', // 8
      md: '1rem', // 16
      lg: '1.5rem', // 24
      xlg: '2rem', // 32
      xxlg: '4rem' // 64
    },
    colors: {},
    extend: {}
  },
  plugins: []
}
