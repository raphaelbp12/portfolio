module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
      },
      fontFamily: {
        'mono': ['Roboto Mono', 'monospace']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
