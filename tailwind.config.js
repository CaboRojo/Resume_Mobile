/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#ffffff",
        black: "#000000",
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        customGray: '#987573', // Add custom color
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'hero-title': ['2.5rem', { lineHeight: '1.2' }], // Ensure correct format
        'nav-item': '1.25rem', // Font size for navigation items
        'card-title': "1.50rem",
        'body': '1rem', // Default body font size
        'sub-heading': '2rem', // Sub headings
      },
      fontWeight: {
        thin: 100,
        normal: 400,
        semibold: 600,
        bold: 700,
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};