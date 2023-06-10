/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.html,js"],
  theme: {
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
      alata: ['Alata', 'sans-serif'],
  },
  screens: {
    tiny: "510px",
    sm: "480px",
    ibw: "570px",
    md: "921px",
    xt: "940px",
    rmd: '768px',
    ptb: '1020px',
    lg: "1124px",
    xl: "1210px",
    pro: '1320px',
  },
  borderWidth: {
    DEFAULT: '1px',
    '0': '0',
    '1': '1px',
    '2': '2px',
    '3': '3px',
    '4': '4px',
    '6': '6px',
    '8': '8px',
  },
  
    extend: {
      letterSpacing: {
        wild : "0.3rem"
      },
      spacing: {
        '0.45': '45%',
      },
      height: {
        'v': '0.1875rem',
      },
      margin: {
        '100': '5rem',
        '200': '8rem',
        '300': '10rem',
      },
      backgroundImage: {
        'small': "url('/images/mobile/image-hero.jpg')",
        'large': "url('/images/desktop/image-hero.jpg')",
      }
  },
},
  plugins: [],
}

