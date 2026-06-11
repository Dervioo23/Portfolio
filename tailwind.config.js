/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Dark navy / blue-gray base
        navy: {
          950: '#060912',
          900: '#0a0f1e',
          850: '#0c1326',
          800: '#0f172a',
          700: '#1a2438',
        },
        slatey: {
          400: '#94a3b8',
          300: '#cbd5e1',
        },
        // Soft cyan accent
        cyanic: {
          400: '#67e8f9',
          500: '#22d3ee',
          600: '#06b6d4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(34,211,238,0.18), 0 8px 40px -8px rgba(34,211,238,0.25)',
        'glow-lg': '0 0 60px -10px rgba(34,211,238,0.35)',
        soft: '0 20px 60px -20px rgba(2,6,23,0.8)',
        card: '0 10px 40px -15px rgba(2,6,23,0.9)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(60% 60% at 50% 30%, rgba(34,211,238,0.15), transparent 70%)',
        'hero-fade': 'linear-gradient(to right, rgba(6,9,18,0.95) 0%, rgba(6,9,18,0.7) 40%, rgba(6,9,18,0.25) 70%, rgba(6,9,18,0.55) 100%)',
        'grid-faint':
          'linear-gradient(rgba(148,163,184,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.05) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(var(--orbit-r)) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(var(--orbit-r)) rotate(-360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
