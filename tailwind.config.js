module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['sans-serif'],
      spartan: ['League Spartan', 'serif'],
      merriweather: ['Merriweather', 'serif'],
      kaushan: ['Kaushan Script', 'serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}