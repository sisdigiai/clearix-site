/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx,svelte,vue}'],
  theme: {
    extend: {
      colors: {
        // Clearix Lens — "vidro escuro refrativo". Ótica de precisão: vidro + luz.
        // Base azul-vidro profunda (NÃO navy-black neutro). Blue + cyan protagonistas.
        ink: {
          base: '#060E1C',     // vidro ótico profundo (fundo)
          surface: '#0B1B33',  // superfície de vidro
          deep: '#040A15',     // mais fundo (seções)
          high: '#13294A',     // vidro elevado
        },
        clearix: {
          blue: '#3B82F6',
          'blue-bright': '#60A5FA',
          cyan: '#06B6D4',
          'cyan-bright': '#22D3EE',  // luz refratada — acento de destaque
          'cyan-soft': '#67E8F9',
          navy: '#1A3A5C',
          'navy-soft': '#93C5FD',    // mark em fundo escuro
        },
        clarity: {
          off: '#EAF3FF',      // texto principal (branco-frio)
          dim: '#C2D4EA',      // texto secundário
          muted: '#7E97B8',    // texto terciário (azul-acinzentado)
          line: '#21385A',     // linhas/contornos (azul)
        },
      },
      fontFamily: {
        // Clearix usa Inter (sem serif — serif é assinatura DIGIAI). Linear/Stripe/Vercel.
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
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
