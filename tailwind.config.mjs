/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx,svelte,vue}'],
  theme: {
    extend: {
      colors: {
        // Clearix Lens: os valores moram em src/styles/global.css (variaveis --t-*, um conjunto por tema:
        // lens, indigo, esmeralda, claro). Aqui so o mapa de nomes; `<alpha-value>` mantem bg-clarity-off/10 etc. funcionando.
        ink: {
          base: 'rgb(var(--t-ink-base) / <alpha-value>)',
          surface: 'rgb(var(--t-ink-surface) / <alpha-value>)',
          deep: 'rgb(var(--t-ink-deep) / <alpha-value>)',
          high: 'rgb(var(--t-ink-high) / <alpha-value>)',
        },
        clearix: {
          blue: 'rgb(var(--t-blue) / <alpha-value>)',
          'blue-bright': 'rgb(var(--t-blue-bright) / <alpha-value>)',
          cyan: 'rgb(var(--t-cyan) / <alpha-value>)',
          'cyan-bright': 'rgb(var(--t-cyan-bright) / <alpha-value>)',
          'cyan-soft': 'rgb(var(--t-cyan-soft) / <alpha-value>)',
          navy: 'rgb(var(--t-navy) / <alpha-value>)',
          'navy-soft': 'rgb(var(--t-navy-soft) / <alpha-value>)',
        },
        clarity: {
          off: 'rgb(var(--t-off) / <alpha-value>)',
          dim: 'rgb(var(--t-dim) / <alpha-value>)',
          muted: 'rgb(var(--t-muted) / <alpha-value>)',
          line: 'rgb(var(--t-line) / <alpha-value>)',
        },
      },
      fontFamily: {
        // Clearix usa Inter (sem serif — serif é assinatura DIGIAI). Linear/Stripe/Vercel.
        display: ['"Inter Variable"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Inter Variable"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['76px', { lineHeight: '1.02', letterSpacing: '-0.035em', fontWeight: '800' }],
        'display-lg': ['60px', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' }],
        'headline-lg': ['44px', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '700' }],
        'headline-md': ['30px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'body-md': ['16px', { lineHeight: '1.55' }],
        'label-md': ['13px', { lineHeight: '1.4', letterSpacing: '0.12em', fontWeight: '600' }],
        'label-sm': ['11px', { lineHeight: '1.4', letterSpacing: '0.14em', fontWeight: '600' }],
      },
      maxWidth: {
        container: '1440px',
      },
      borderRadius: {
        // Clearix Lens = cantos suaves (≠ DIGIAI House sharp).
        none: '0',
        DEFAULT: '8px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '22px',
      },
    },
  },
  plugins: [],
};
