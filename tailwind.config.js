module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-blue': '#769ECB',
        'light-gray': '#7B879D'
      },
      fontFamily: {
        outfit: ["'Outfit', sans-serif"]
      },
      backgroundImage: {
        'qr': "url('/public/image-qr-code.png')",
      }
    }
  },
  plugins: []
};