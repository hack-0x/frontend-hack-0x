import type { Config } from 'tailwindcss'
const colors = 'tailwindcss/colors';
 
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'andale': ['Andale Mono']
      },
      colors: {
        primary: {
          800: '#000000',
        },
        secondary: {
          800: '#fffff',
        }
      },
    },
  },
  plugins: [],
}
export default config
