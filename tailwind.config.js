module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        customYellow: {
          50: '#fff3db',
          100: '#ffebc2',
          200: '#ffd685',
          300: '#ffc04a',
          400: '#ffb627',  // Color base
          500: '#e6a323',
          600: '#cc8f1f',
          700: '#b37c1b',
          800: '#996819',
          900: '#805515',
        },
        customBlue: {
          50: '#f2f6fa',
          100: '#e2ecf4',
          200: '#c8d9e8',
          300: '#b0c6dc',
          400: '#A9BCD0',  // Color base
          500: '#92a4ba',
          600: '#7b8da3',
          700: '#65758b',
          800: '#505e73',
          900: '#3a475b',
        },
      },
    },
  },
  plugins: [  require('@tailwindcss/forms'),
    
  ],
}
