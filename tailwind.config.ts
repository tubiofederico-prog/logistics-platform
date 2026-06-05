import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#0f1419',
        'dark-secondary': '#1a2332',
        'dark-tertiary': '#243447',
        'dark-border': '#2d435e',
        'navy-900': '#0f1419',
        'navy-800': '#1a2332',
        'navy-700': '#243447',
        'navy-600': '#2d435e',
        'cyan-400': '#00d9ff',
        'cyan-500': '#00b8d4',
        'electric-500': '#0ea5e9',
        'electric-600': '#0284c7',
      },
      backgroundColor: {
        'dark-primary': '#0f1419',
        'dark-secondary': '#1a2332',
        'dark-tertiary': '#243447',
      },
      borderColor: {
        'dark-border': '#2d435e',
        'cyan-400': '#00d9ff',
      },
      textColor: {
        'dark-primary': '#0f1419',
      },
      backgroundImage: {
        'gradient-premium': 'linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%)',
      },
    },
  },
  plugins: [],
}
export default config
