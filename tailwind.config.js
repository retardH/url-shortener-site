/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        gray: 'hsl(0, 0%, 75%)',
        grayishBlue: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%)',
      },
      height: {
        0.5: '1px',
      },
      borderWidth: {
        0.5: '1px',
      },
      margin: {
        17: '72px'
      },
      backgroundImage: {
        shortenerImgDesktop: "url('./src/assets/images/bg-shorten-desktop.svg')",
        shortenerImgMobile: "url('./src/assets/images/bg-shorten-mobile.svg')",

      }
    },
  },
  plugins: [],
}

