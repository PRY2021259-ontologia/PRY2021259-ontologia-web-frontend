module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        'bluepotato': '#1E6594',
        'bluepotatohover': '#13496e',
        'bluebuscar': '#13293D',
        'bluebuscarhover': '#1a4163',
        'whiteresultado': '#F9FAFB',	
        'skyblue': '#2970CA',
        'bluedetails': '#3360FF',
      }
    },
  },
  plugins: [],
}
