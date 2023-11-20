/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Outrun: ['"Outrun future"'],
        Satoshi: ['Satoshi-Regular', 'sans-serif'],
      },
      keyframes: {
        expand: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(0.5)' },
        },
        expandOpacity: {
          '0%': { opacity: 0, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.3)' },
          '100%': { opacity: 0, transform: 'scale(1.295)' },
        },
      },
      animation: {
        expand: 'expand',
        expandOpacity: 'expandOpacity 5s linear infinite',
        overlay:
          'transform 0.3s cubic-bezier(.215,.61,.355,1),-webkit-transform .3s cubic-bezier(.215,.61,.355,1)',
        aboutMe: 'spin 10s linear infinite',
      },
      backgroundImage: {
        'circle-gradient-1':
          'linear-gradient(-180deg, rgba(121,40,202,0.1) 20%, hsl(0 0% 0%) 100%)',
        'circle-gradient-2':
          'linear-gradient(-180deg, rgba(121,40,202,0.09999999999999998) 20%, hsl(0 0% 0%) 100%)',
        'circle-gradient-3':
          'linear-gradient(-180deg, rgba(121,40,202,0.4) 40%, hsl(0 0% 0%) 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
