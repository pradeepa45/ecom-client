import { nextui } from "@nextui-org/theme";

module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      //   link: {
      //     DEFAULT: "var(--link-default)",
      //     hover: "var(--link-hover)",
      //   },
      //   primary: {
      //     DEFAULT: "var(--primary-default)",
      //     hover: "var(--primary-hover)",
      //     disabled: "var(--primary-disabled)",
      //     foreground: "var(--primary-foreground)",
      //   },
      //   secondary: {
      //     DEFAULT: "var(--secondary-default)",
      //     hover: "var(--secondary-hover)",
      //     disabled: "var(--secondary-disabled)",
      //     foreground: "var(--secondary-foreground)",
      //   },
      //   warning: {
      //     DEFAULT: "var(--warning-default)",
      //     hover: "var(--warning-hover)",
      //     disabled: "var(--warning-disabled)",
      //     foreground: "var(--warning-foreground)",
      //   },
      //   danger: {
      //     DEFAULT: "var(--danger-default)",
      //     hover: "var(--danger-hover)",
      //     disabled: "var(--danger-disabled)",
      //     foreground: "var(--danger-foreground)",
      //   },
      //   success: {
      //     DEFAULT: "var(--success-default)",
      //     hover: "var(--success-hover)",
      //     disabled: "var(--success-disabled)",
      //     foreground: "var(--success-foreground)",
      //   },
      //   info: {
      //     DEFAULT: "var(--info-default)",
      //     hover: "var(--info-hover)",
      //     disabled: "var(--info-disabled)",
      //     foreground: "var(--info-foreground)",
      //   },
      //   border: "var(--border)",
      //   shadow: "var(--shadow)",
      // },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
