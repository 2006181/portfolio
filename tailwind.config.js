/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          void: '#030611',
          black: '#050814',
          dark: '#080d22',
          navy: '#0d163a',
          surface: '#111b44',
          card: 'rgba(13, 22, 58, 0.72)',
          border: 'rgba(0, 240, 255, 0.22)',
          'border-pink': 'rgba(255, 0, 127, 0.35)',
          'border-purple': 'rgba(114, 9, 183, 0.4)',
          cyan: '#00f0ff',
          sky: '#4cc9f0',
          blue: '#4361ee',
          pink: '#ff007f',
          magenta: '#f72585',
          purple: '#7209b7',
          violet: '#3a0ca3',
          emerald: '#10b981',
          yellow: '#ffe600',
          muted: '#8e9bb4',
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(0, 240, 255, 0.45), 0 0 35px rgba(0, 240, 255, 0.15)',
        'neon-pink': '0 0 15px rgba(255, 0, 127, 0.45), 0 0 35px rgba(255, 0, 127, 0.15)',
        'neon-purple': '0 0 15px rgba(114, 9, 183, 0.45), 0 0 35px rgba(114, 9, 183, 0.15)',
        'cyber-card': '0 10px 40px -10px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 240, 255, 0.08)',
        'cyber-card-pink': '0 10px 40px -10px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 0, 127, 0.1)',
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(to right, rgba(0, 240, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 240, 255, 0.05) 1px, transparent 1px)',
        'cyber-grid-pink': 'linear-gradient(to right, rgba(255, 0, 127, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 0, 127, 0.05) 1px, transparent 1px)',
        'cyber-gradient': 'linear-gradient(135deg, rgba(0, 240, 255, 0.15) 0%, rgba(255, 0, 127, 0.15) 100%)',
        'cyber-gradient-card': 'linear-gradient(135deg, rgba(13, 22, 58, 0.85) 0%, rgba(8, 13, 34, 0.9) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-scan': 'scan 3s linear infinite',
        'laser-move': 'laser 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        laser: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
