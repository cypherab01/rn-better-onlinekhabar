/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#2260bf",
      },
      fontFamily: {
        thin: ["Poppins-Thin"],
        extralight: ["Poppins-ExtraLight"],
        light: ["Poppins-Light"],
        normal: ["Poppins-Regular"],
        medium: ["Poppins-Medium"],
        semibold: ["Poppins-SemiBold"],
        bold: ["Poppins-Bold"],
        extrabold: ["Poppins-ExtraBold"],
        black: ["Poppins-Black"],
      },
    },
  },
  plugins: [],
};
