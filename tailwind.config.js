/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(109.6deg, rgba(0, 0, 0, 0.5) 11.2%, rgb(63, 61, 61) 160%)',
      },
      colors: {
        primary: {
          0: '#A855F7',
          10: '#A78BFA',
          20: '#D8B4FE',
          30: '#EAB8FE',
          40: '#a297d4',
          50: '#b5abdd',
        },
        surface: {
          0: '#121212',
          10: '#282828',
          20: '#3f3f3f',
          30: '#575757',
          40: '#717171',
          50: '#8b8b8b',
        },
        'surface-mixed': {
          0: '#1a1820',
          10: '#2f2d35',
          20: '#45444b',
          30: '#5d5b62',
          40: '#76747a',
          50: '#908f93',
        },
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite', // Creates infinite animation
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 00px #9b59b6, 0 0 0px #9b59b6' }, // Light purple glow
          '50%': { boxShadow: '0 0 20px #8e44ad, 0 0 10px #8e44ad' }, // Intense purple glow
        },
      }
    },
  },
  plugins: [],
}