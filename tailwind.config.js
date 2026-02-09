/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: 'var(--terminal-bg)',
          text: 'var(--terminal-text)',
          accent: 'var(--terminal-accent)',
          secondary: 'var(--terminal-secondary)',
          success: 'var(--terminal-success)',
          error: 'var(--terminal-error)',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'cursor-blink': 'blink 1.2s step-end infinite',
        'glitch': 'glitch 0.3s cubic-bezier(.25, .46, .45, .94) both',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px var(--terminal-accent), 0 0 20px var(--terminal-accent)' },
          '100%': { textShadow: '0 0 20px var(--terminal-accent), 0 0 30px var(--terminal-accent)' },
        }
      }
    },
  },
  plugins: [],
}
