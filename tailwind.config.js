/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#08090d',
        navy: '#07152d',
        cream: '#e9dfce',
        muted: '#9ca3af',
        electric: '#68f6ff',
      },
      boxShadow: {
        glow: '0 0 40px rgba(104, 246, 255, 0.22)',
        soft: '0 25px 80px rgba(0,0,0,0.45)',
      },
      backgroundImage: {
        'radial-premium': 'radial-gradient(circle at 20% 20%, rgba(104,246,255,.24), transparent 26%), radial-gradient(circle at 80% 10%, rgba(116,75,255,.23), transparent 30%), radial-gradient(circle at 50% 90%, rgba(233,223,206,.12), transparent 28%)',
      },
      animation: {
        marquee: 'marquee 24s linear infinite',
        float: 'float 8s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3.5s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(18px,-24px,0) scale(1.05)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(104,246,255,.18)' },
          '50%': { boxShadow: '0 0 55px rgba(104,246,255,.38)' },
        },
      },
    },
  },
  plugins: [],
};
