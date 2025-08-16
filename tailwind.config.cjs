module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      animation: {
        spin: 'spin 1s linear infinite',
      },
        colors: {
          primary: {
            50: '#eef2ff',
            500: '#4f46e5'
          }
        },
        boxShadow: {
          'input-md': '0 6px 18px rgba(15, 23, 42, 0.08)'
        }
    },
  },
  plugins: [],
}
