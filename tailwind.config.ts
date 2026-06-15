import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17212b",
        medway: "#146c72",
        river: "#2c8f9a",
        chalk: "#f7f4ee",
        clay: "#c2624b",
        moss: "#5f7f55"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(23, 33, 43, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
