/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx,svelte,vue}'],
  theme: {
    extend: {
      colors: {
        // Clearix marketing — dark editorial navy-tinted (família de marcas DIGIAI).
        // O ecossistema Clearix usa o tom cyan forte (.lux-cyan no DS).
        ink: {
          base: '#0A1420',      // background principal (navy-black)
          surface: '#0F1C2E',   // containers
          deep: '#070E18',      // surface mais baixa
          high: '#16273C',      // surface elevada
        },
        // Acentos da marca Clearix (DS: mark navy + ponto cyan)
        clearix: {
          cyan: '#06B6D4',      // ponto refrativo — acento primário de marketing
          'cyan-soft': '#67E8F9',
          navy: '#1A3A5C',      // arco do mark
          'navy-soft': '#93C5FD', // mark em fundo escuro (blue-300)
          blue: '#3B82F6',      // action-primary do app (Clearix Lens)
        },
        clarity: {
          off: '#F5F9FF',       // texto principal
          dim: '#D6E2F0',       // texto secundário
          muted: '#8DA2BC',     // texto terciário (navy-tinted)
          line: '#2A3B4F',      // outline-variant
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display-lg': ['64px', { lineHeight: '72px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'headline-md': ['32px', { lineHeight: '40px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px' }],
        'body-md': ['16px', { lineHeight: '24px' }],
        'label-md': ['14px', { lineHeight: '20px', letterSpacing: '0.05em', fontWeight: '500' }],
        'label-sm': ['12px', { lineHeight: '16px', letterSpacing: '0.08em', fontWeight: '500' }],
      },
      maxWidth: {
        container: '1440px',
      },
      borderRadius: {
        // Clearix Lens = cantos suaves (≠ DIGIAI House sharp). Raio discreto.
        none: '0',
        DEFAULT: '6px',
        md: '6px',
        lg: '8px',
        xl: '12px',
      },
    },
  },
  plugins: [],
};
