/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '570px',
      sm: '780px',
      md: '1000px',
      lg: '1240px',
      xl: '1440px',
    },

    fontFamily: {
      'sans': ['Poppins', 'system-ui']
    },
    colors: {
      'blue-night': '#070c18',
      'blue-dark-sky': '#0E182F',
      'blue-sky': '#1c3168',
      'orange': '#CC6D28',
      'sun-orange': '#FFB800',
      'indigo-blue': '#495f95',
      'green': '#726e4b',

      gray: {
        '100': '#f3f4f6',
        '200': '#e5e7eb',
        '300': '#d1d5db',
        '400': '#9ca3af',
        '500': '#6b7280',
        '600': '#4b5563',
        '700': '#374151',
        '800': '#1f2937',
        '900': '#111827',
        '950': '#030712'
      },
      sand: {
        '50': '#fff9e4',
        '100': '#FFFFD6'
      }
    },
    extend: {},
  },
  plugins: [],
}

