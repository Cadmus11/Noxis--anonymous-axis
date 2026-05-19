/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,ts,tsx}", "./src/**/*.{js,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        noxis: {
          bg: "#050816",
          card: "rgba(255,255,255,0.07)",
          primary: "#8B5CF6",
          accent: "#00E5FF",
          secondary: "#EC4899",
          text: "#F8FAFC",
          textSecondary: "#CBD5E1",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        space: ["System"],
        satoshi: ["System"],
        inter: ["System"],
      },
    },
  },
  plugins: [],
};
