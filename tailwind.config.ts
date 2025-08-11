import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Enhanced portfolio-specific neon colors
        neon: {
          blue: "hsl(var(--neon-blue))",
          purple: "hsl(var(--neon-purple))",
          cyan: "hsl(var(--neon-cyan))",
          green: "hsl(var(--neon-green))",
          pink: "hsl(var(--neon-pink))",
          orange: "hsl(var(--neon-orange))",
          yellow: "hsl(var(--neon-yellow))",
        },
        // Gradient color stops
        gradient: {
          start: "hsl(212 100% 65%)",
          middle: "hsl(270 95% 80%)",
          end: "hsl(190 100% 75%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Fira Code", "Consolas", "monospace"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 100, 255, 0.12), transparent), radial-gradient(ellipse 80% 80% at 20% 80%, rgba(0, 200, 255, 0.08), transparent)',
        'tech-grid': 'linear-gradient(rgba(120, 100, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 100, 255, 0.08) 1px, transparent 1px)',
        'particles': 'radial-gradient(circle at 25% 25%, rgba(0, 200, 255, 0.05) 0%, transparent 50%)',
        'neural-network': 'conic-gradient(from 90deg at 50% 0%, transparent, rgba(120, 100, 255, 0.05), transparent)',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'bounce-in': {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.1)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'typewriter': {
          '0%': { width: '0ch' },
          '100%': { width: '100%' },
        },
        'blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.5)' },
          '50%': { boxShadow: '0 0 40px hsl(var(--primary) / 0.8), 0 0 80px hsl(var(--primary) / 0.3)' },
        },
        'particle-float': {
          '0%': { transform: 'translateY(100vh) scale(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) scale(1)', opacity: '0' },
        },
        'grid-move': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50px, 50px)' },
        },
        'tilt': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        'pulse-slow': "pulse-slow 4s ease-in-out infinite",
        'slide-up': "slide-up 0.5s ease-out",
        'slide-down': "slide-down 0.5s ease-out",
        'slide-left': "slide-left 0.5s ease-out",
        'slide-right': "slide-right 0.5s ease-out",
        'fade-in': "fade-in 0.5s ease-out",
        'scale-in': "scale-in 0.3s ease-out",
        'bounce-in': "bounce-in 0.6s ease-out",
        'typewriter': "typewriter 3s steps(30) 1s forwards",
        'blink': "blink 1s infinite",
        'glow': "glow 2s ease-in-out infinite",
        'particle-float': "particle-float 8s linear infinite",
        'grid-move': "grid-move 20s linear infinite",
        'tilt': "tilt 10s ease-in-out infinite",
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px hsl(var(--primary) / 0.5)',
        'glow-lg': '0 0 40px hsl(var(--primary) / 0.5), 0 0 80px hsl(var(--primary) / 0.2)',
        'glow-xl': '0 0 60px hsl(var(--primary) / 0.6), 0 0 120px hsl(var(--primary) / 0.3)',
        'neon': '0 0 20px currentColor',
        'neon-lg': '0 0 40px currentColor, 0 0 80px currentColor',
        'premium': '0 25px 50px rgba(0, 0, 0, 0.25), 0 0 50px hsl(var(--primary) / 0.3)',
        'glass': '0 12px 40px rgba(31, 38, 135, 0.4), 0 2px 8px rgba(31, 38, 135, 0.2)',
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      // 3D transform utilities
      perspective: {
        '500': '500px',
        '1000': '1000px',
        '1500': '1500px',
        '2000': '2000px',
        '2500': '2500px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
        'flat': 'flat',
      },
      rotate: {
        'x-1': 'rotateX(1deg)',
        'x-2': 'rotateX(2deg)',
        'x-3': 'rotateX(3deg)',
        'x-5': 'rotateX(5deg)',
        'y-1': 'rotateY(1deg)',
        'y-2': 'rotateY(2deg)',
        'y-3': 'rotateY(3deg)',
        'y-5': 'rotateY(5deg)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }: any) {
      const newUtilities = {
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.perspective-1500': {
          perspective: '1500px',
        },
        '.perspective-2000': {
          perspective: '2000px',
        },
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.rotateX-2': {
          transform: 'rotateX(2deg)',
        },
        '.rotateX-3': {
          transform: 'rotateX(3deg)',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} satisfies Config;
