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
    colors: {
      blue: {
        400: 'var(--ie-c-blue-400, #000)'
      },
      gray: {
        400: 'var(--ie-c-gray-400, #000)',
        300: 'var(--ie-c-gray-300, #000)',
        200: 'var(--ie-c-gray-200, #000)'
      },
      red: {
        100: 'var(--ie-c-red-100, #000)'
      },
      default: {
        positive: 'var(--ie-c-white, #fff)',
        negative: 'var(--ie-c-black, #000)'
      }
    },
    fontFamily: {
      default: 'var(--ie-defualt-font-family, Arial)'
    },
    fontWeight: {
      light: 'var(--ie-font-weight-light, 300)', // 300
      regular: 'var(--ie-font-weight-regular, 400)', // 400
      medium: 'var(--ie-font-weight-medium, 500)', // 500
      bold: 'var(--ie-font-weight-bold, 700)' // 700
    },
    fontSize: {
      base: ['var(--sm-font-size-medium)', { lineHeight: 'normal' }], // 22
      lg: ['var(--sm-font-size-big)', { lineHeight: 'normal' }], // 16
      xlg: ['var(--sm-font-size-xlarge)', { lineHeight: 'normal' }], // 14
      xxlg: ['var(--sm-font-size-xxlarge)', { lineHeight: 'normal' }], // 12
      xxxlg: ['var(--sm-font-size-xxxlarge)', { lineHeight: 'normal' }] // 10
    },
    extend: {}
  },
  plugins: []
}
