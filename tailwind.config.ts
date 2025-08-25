import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: "#f5fbf6",
          100: "#e8f7eb",
          200: "#c9ebd1",
          300: "#a5ddb3",
          400: "#76ca8c",
          500: "#4dbb6a",
          600: "#3aa656",
          700: "#2f8446",
          800: "#296a3b",
          900: "#1f4b2b"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)"
      }
    },
  },
  plugins: [],
};
export default config;
