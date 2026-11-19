/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      colors: {
        bosque: { DEFAULT: '#1F3D2B', 2: '#264A35', 3: '#2E5640' },
        crema: { DEFAULT: '#F6F1E7', 2: '#EDE5D6', 3: '#E3D8C4' },
        oro: { DEFAULT: '#B8935A', texto: '#7A5C30', claro: '#E2C99F' },
        cafe: { DEFAULT: '#3B2A20', suave: '#544739' },
        salvia: '#C9D1C7',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: { wrap: '1200px', texto: '65ch' },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-out': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
    },
  },
  plugins: [],
};
