/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "sm": "576px",
      "lg": "968px",
    },
    colors: {
      "transparent": "transparent",
      "bright-orange": "hsl(31, 77%, 52%)",
      "dark-cyan": "hsl(184, 100%, 22%)",
      "very-dark-cyan": "hsl(179, 100%, 13%)",
      "transparent-white": "hsla(0, 0%, 100%, 0.75)",
      "very-light-gray": "hsl(0, 0%, 95%)",
    },
    spacing: {
      "0": "0px",
      "1": "0.0625rem",
      "2": "0.125rem",
      "4": "0.25rem",
      "8": "0.5rem",
      "12": "0.75rem",
      "16": "1rem",
      "20": "1.25rem",
      "24": "1.5rem",
      "28": "1.75rem",
      "32": "2rem",
      "36": "2.25rem",
      "40": "2.5rem",
      "44": "2.75rem",
      "48": "3rem",
      "52": "3.25rem",
      "56": "3.5rem",
      "60": "3.75rem",
      "64": "4rem",
      "68": "4.25rem",
      "72": "4.5rem",
      "76": "4.75rem",
      "80": "5rem",
      "84": "5.25rem",
      "88": "5.5rem",
      "92": "5.75rem",
      "96": "6rem",
      "100": "6.25rem",
      "128": "8rem",
      "146": "9.125rem",
      "172": "10.75rem",
      "256": "16rem",
      "512": "32rem",
      "528": "33rem",
      "920": "57.5rem",
      "1024": "64rem",
    },
    fontSize: {
      "15": ["0.9375rem", { lineHeight: "1.5625rem" }],
      "40": ["2.5rem", { lineHeight: "1" }],
    },
    fontWeight: {
      "400": "400",
      "700": "700",
    },
    borderRadius: {
      "8": "0.5rem",
      "full": "9999px",
    },
    extend: {
      fontFamily: {
        heading: [
          'Big Shoulders Display',
          ...defaultTheme.fontFamily.sans,
        ],
        body: [
          "Lexend Deca",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
}
