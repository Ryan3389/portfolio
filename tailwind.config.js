/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // backgroundColor: '#e0e1dd',
        backgroundColor: '#F9F9F9',
        // secondaryColor: '#1b263b'
        secondaryColor: '#333333',
        secondaryText: '#6B6B6B',
        btnBackground: '#B0C4DE',
        btnBorder: '#4682B4',
        btnHover: '#5F9EA0'
      }
    },
  },
  plugins: [],
}

