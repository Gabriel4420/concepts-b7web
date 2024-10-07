import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "312px",
      sm: "511px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      backgroundImage: {
        galaxia:
          "url('https://wallpapercave.com/wp/wp4575207.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
  },
  safelist: [
    "text-2xl",
    "text-3xl",
    {
      pattern: /bg-(red|green|blue)-(100|200|300)/,
    },
  ],
  plugins: [require("tailwindcss-animate")],
};
export default config;
