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
    maxWidth: ({ theme }) => ({
      ...theme('spacing'),
      full: '100%'
    }),

    boxShadow: {
      default: '0px 0px 5px 2px hsla(0,0%,70%, .5)',
      backdrop: '0px 0px 10px 4px hsla(0,0%,0%, .15)'
    },
    spacing: {
      none: 'var(--ie-size-none, 1rem)',
      xsm: 'var(--ie-size-xsm, 1rem)', // 4
      sm: 'var(--ie-size-sm, 1rem)', // 8
      md: 'var(--ie-size-md, 1rem)', // 16
      lg: 'var(--ie-size-lg, 1rem)', // 24
      xlg: 'var(--ie-size-xlg, 1rem)', // 32
      xxlg: 'var(--ie-size-xxlg, 1rem)' // 64
    },
    colors: {
      blue: {
        600: 'var(--ie-c-blue-600, #000)',
        400: 'var(--ie-c-blue-400, #000)',
        300: 'var(--ie-c-blue-300, #000)',
        200: 'var(--ie-c-blue-200, #000)'
      },
      gray: {
        400: 'var(--ie-c-gray-400, #000)',
        300: 'var(--ie-c-gray-300, #000)',
        200: 'var(--ie-c-gray-200, #000)'
      },
      green: {
        100: 'var(--ie-c-green-100, #000)',
        50: 'var(--ie-c-green-50, #000)'
      },
      yellow: {
        400: 'var(--ie-c-yellow-400, #000)'
      },
      red: {
        100: 'var(--ie-c-red-100, #000)',
        50: 'var(--ie-c-red-50, #000)'
      },
      default: {
        current: 'currentColor',
        none: 'transparent',
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
      xlg: ['var(--ie-font-size-xbig)', { lineHeight: 'normal' }], // 30
      base: ['var(--ie-font-size-medium)', { lineHeight: 'normal' }], // 22
      lg: ['var(--ie-font-size-big)', { lineHeight: 'normal' }], // 16
      small: ['var(--ie-font-size-small)', { lineHeight: 'normal' }], // 14
      xsmall: ['var(--ie-font-size-xsmall)', { lineHeight: 'normal' }], // 12
      xxsmall: ['var(--ie-font-size-xxsmall)', { lineHeight: 'normal' }] // 10
    },
    transitionProperty: {
      colors:
        'color, background-color, border-color, text-decoration-color, fill, stroke, outline, box-shadow',
      transform: 'transform opacity',
      size: 'width, min-width, height, min-height',
      spacing: 'margin, padding',
      opacity: 'opacity'
    },
    extend: {
      flex: {
        lg: '0 1 var(--ie-size-lg, 1rem)',
        xlg: '0 0 var(--ie-size-xlg, 1rem)',
        xxlg: '0 0 var(--ie-size-xxlg, 1rem)'
      },
      animation: {
        spinner: 'spinner .6s linear infinite',
        dialog: 'dialog .6s ease-out'
      },
      keyframes: {
        spinner: {
          '0%': { transform: 'translateX(-50%) translateY(-50%) rotate(0deg)' },
          '100%': { transform: 'translateX(-50%) translateY(-50%) rotate(360deg)' }
        },
        dialog: {
          '0%': { transform: 'translateY(-60%)', opacity: 0 },
          '100%': { transform: 'translateY(0%)', opacity: 1 }
        }
      }
    }
  },
  plugins: []
};
