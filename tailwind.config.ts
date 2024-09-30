import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0.5",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        fade: "fadeIn 1s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
