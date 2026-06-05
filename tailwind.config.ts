import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
      red: {
        600: '#dc2626',
        700: '#b91c1c',
        900: '#7f1d1d',
      },
      yellow: {
        400: '#facc15',
        900: '#78350f',
      },
      green: {
        400: '#4ade80',
        500: '#22c55e',
        900: '#14532d',
      },
      blue: {
        300: '#93c5fd',
        900: '#172554',
      },
      navy: {
        900: '#0f1419',
        800: '#1a2332',
        700: '#243447',
        600: '#2d435e',
      },
      cyan: {
        400: '#00d9ff',
        500: '#00b8d4',
      },
      electric: {
        500: '#0ea5e9',
        600: '#0284c7',
      },
    },
    extend: {
      spacing: {
        64: '16rem',
      },
      borderRadius: {
        lg: '0.5rem',
      },
    },
  },
  plugins: [],
}
export default config
