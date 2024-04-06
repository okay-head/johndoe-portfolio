/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      jost: 'Jost, sans-serif;',
      urbanist: "'Urbanist', sans-serif;",
      firaCode: '"Fira Code", monospace;',
    },
    extend: {
      colors: {
        teal: {
          base: {
            700: 'hsl(184, 60%, 83%)',
            400: 'hsl(184, 60%, 88%)',
            200: 'hsl(184, 60%, 92%)',
            150: 'hsl(184, 60%, 94.5%)',
            100: 'hsl(184, 60%, 96%)',
          },
        },
        greenAccent:{
          700: 'hsl(139, 90%, 90%)',
          150: 'hsl(139, 90%, 96.5%)',
        },
        text: {
          primary: 'hsla(0, 0%, 0%, 0.898)',
          lighter: 'hsl(0, 0%, 49%)',
          subtitle: 'hsla(0, 0%, 0%, 0.75)',
        },
      },
      screens: {
        xs: '430px',
      },
    },
  },
}
