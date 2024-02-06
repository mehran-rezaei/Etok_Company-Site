/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors : {
        navbar : '#4F5665',
        navbarBt : '#0072E2' ,
        herosec : '#0B132A',
        pcolor : '#373737' , 
        p2color : '#37474F',
        mostvw : '#252525' ,
        cmcolor : '#7D7D7D' ,
        cmcolor2 : '#0B132A' ,
        footercolor : '#4F5665' ,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        '2xl': '1600px',
      },

    },
  },
  plugins: [],
}
