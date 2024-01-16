/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto Mono', 'monospace']
    },

    extend: {
      // colors: {
      //   pizza: "#123456"
      // },
      height: {
        screen: "100dvh"
      }
    },
  },
  plugins: [],
}

