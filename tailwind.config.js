/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary : '#6b4c35',
        dark : '#0f172a',
        secondary: '#64748b',
        facebook: '#1877F2',
        youtube: '#FF0000',
        instagram: '#E4405F'
      },
      animation:{
        'spin-slow': 'spin 10s linear infinite',
      },
      screens:{
        '2xl' : '1320px'
      }

    },
  },
  plugins: [],
}
