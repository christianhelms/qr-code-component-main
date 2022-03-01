module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
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