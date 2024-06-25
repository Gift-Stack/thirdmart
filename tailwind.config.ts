/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import path from "node:path";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    path.join(path.dirname(require.resolve("@coinbase/onchainkit")), "**/*.js"),
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        muted: {
          DEFAULT: "hsl(210 40% 96.1%)",
          foreground: "hsl(215.4 16.3% 46.9%)",
        },
        accent: {
          DEFAULT: "hsl(210 40% 96.1%)",
          foreground: "hsl(222.2 47.4% 11.2%)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        home: "linear-gradient(191deg, #16163F 6.8%, #6903F9 58.08%, #FF15E5 133.68%)",
        "bid-time-h": "linear-gradient(180deg, #16163F 0%, #16163F 100%)",
        "bid-time-m": "linear-gradient(180deg, #FF15E5 0%, #6903F9 100%)",
        "bid-time-s":
          "linear-gradient(180deg, #16163F 0%, #6903F9 57.29%, #FF15E5 96.35%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fill: {
        default: "var(--bg-default)",
        alternate: "var(--bg-alternate)",
        inverse: "var(--bg-inverse)",
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        error: "var(--bg-error)",
        warning: "var(--bg-warning)",
        success: "var(--bg-success)",
      },
      textColor: {
        inverse: "var(--text-inverse)",
        foreground: "var(--text-foreground)",
        "foreground-muted": "var(--text-foreground-muted)",
        error: "var(--text-error)",
        primary: "var(--text-primary)",
        success: "var(--text-success)",
        warning: "var(--text-warning)",
        disabled: "var(--text-disabled)",
      },
      backgroundColor: {
        default: "var(--bg-default)",
        "default-hover": "var(--bg-default-hover)",
        "default-active": "var(--bg-default-active)",
        alternate: "var(--bg-alternate)",
        "alternate-hover": "var(--bg-alternate-hover)",
        "alternate-active": "var(--bg-alternate-active)",
        inverse: "var(--bg-inverse)",
        "inverse-hover": "var(--bg-inverse-hover)",
        "inverse-active": "var(--bg-inverse-active)",
        primary: "var(--bg-primary)",
        "primary-hover": "var(--bg-primary-hover)",
        "primary-active": "var(--bg-primary-active)",
        secondary: "var(--bg-secondary)",
        "secondary-hover": "var(--bg-secondary-hover)",
        "secondary-active": "var(--bg-secondary-active)",
        error: "var(--bg-error)",
        warning: "var(--bg-warning)",
        success: "var(--bg-success)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
