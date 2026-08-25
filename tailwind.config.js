/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef3ff',
          100: '#dfe8ff',
          200: '#c2d3ff',
          300: '#94b3ff',
          400: '#5f89ff',
          500: '#3563fa',
          600: '#1e46ee',
          700: '#1734d6',
          800: '#182dac',
          900: '#1a2c88',
          950: '#131c52',
        },
        accent: {
          50: '#fef3f2',
          100: '#fde3e1',
          200: '#fccbc8',
          300: '#f9a7a1',
          400: '#f4756c',
          500: '#e94b3f',
          600: '#d63324',
          700: '#b4271b',
          800: '#95241a',
          900: '#7c231b',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(20, 39, 120, 0.25)',
      },
    },
  },
  plugins: [],
}
