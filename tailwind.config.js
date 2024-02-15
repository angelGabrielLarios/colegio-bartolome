import tailwindcss_animated from 'tailwindcss-animated'
import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "navy": "#041562",
        "blueCustom": "#11468F",
        "redCustom": "#DA1212",
        "whiteCustom": "#EEEEEE",
        "blackCustom": "#212427"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        workSans: ["Work Sans", "sans-serif"],


      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [
    daisyui,
    tailwindcss_animated,

  ],
}