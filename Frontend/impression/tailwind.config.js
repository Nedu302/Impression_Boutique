/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Adjust this line
    './src/**/*.{js,ts,jsx,tsx}', // Ensure this matches your file structure
  ],
  theme: {
    extend: {
      spacing: {
        'wide': '0.5em', 
        'wider': '1em',
      }
    },
    fontFamily:{
      abc:["Ubuntu Sans,sans-serif"],
      new:["cormorantgaramond-light, cormorantgaramond,cormorant garamond, serif"],
      'custom-serif': ['"Times New Roman"', 'serif']
    },
    keyframes: {
      zigzag: {
        '0%, 100%': { transform: 'translateX(0)' },
        '25%': { transform: 'translateX(-1px)' },
        '50%': { transform: 'translateX(1px)' },
        '75%': { transform: 'translateX(-1px)' },
      },
      },
      animation: {
        zigzag: 'zigzag 0.5s ease-in-out infinite',
      },
    fontWeight:{
      'hairline': 100,
       'thin':100,
       'font-bold':700
    },
   
    
  },
  extend: {
    width: {
      'custom': '200px', 
      'half-screen': '50vw', 
    },
    height: {
      'custom': '100px', 
      'full-screen': '100vh', 
    },
  },
  // plugins: [],
}


