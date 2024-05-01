module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Path to all your pages
    "./components/**/*.{js,ts,jsx,tsx}" // If you have a components directory
  ],
  theme: {
    extend: {
      fontFamily: {
        'hind-madurai': ['Hind Madurai', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'], 
      },
      transitionProperty: {
        'max-height': 'max-height'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
