module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['JetBrains Mono']
    },
    extend: {
      colors: {
        indigo: {
          '50': '#f5f9fc',
          '100': '#e8f2fc',
          '200': '#cddcfb',
          '300': '#afc1fa',
          '400': '#8994fa',
          '500': '#6066fa',
          '600': '#4645f6',
          '700': '#3936e3',
          '800': '#2d2cb8',
          '900': '#242591'
        },
        limegreen: {
          '50': '#f3f9f7',
          '100': '#e6f8ef',
          '200': '#c6f2d6',
          '300': '#95e7b6',
          '400': '#44d382',
          '500': '#1aba51',
          '600': '#149d38',
          '700': '#197e33',
          '800': '#1a602f',
          '900': '#174d2a'
        },
        scarlet: {
          '50': '#fcf8f6',
          '100': '#fcefee',
          '200': '#fad5db',
          '300': '#f9b1ba',
          '400': '#fa7c86',
          '500': '#fa5158',
          '600': '#f3323a',
          '700': '#d52634',
          '800': '#aa1f2e',
          '900': '#861a27'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
