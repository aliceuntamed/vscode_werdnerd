/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-main": "#0a0a0a",
        "bg-elevated": "#1a1a1a",
        "bg-subtle": "#2a2a2a",
        "text-primary": "#ffffff",
        "text-muted": "#a0a0a0",
        "accent-pink": "#ff4d80",
        "accent-blue": "#4da6ff",
        "border-subtle": "#333333",
        scrim: "color-mix(in oklab, #ffffff 70%, transparent)",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        border: "hsl(var(--border))",
        neutral: "#303039",
        outline: "#ff4d80",
        overlay: "color-mix(in oklab, #ffffff 40%, transparent)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        surface: "#2a2f37",
        backplate: "color-mix(in oklab, #ffffff 60%, transparent)",
        "on-accent": "#0f0f13",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        "on-primary": "#0f0f13",
        "on-surface": "#f7f7fa",
        "on-secondary": "#0f0f13",
        "surface-elevated": "color-mix(in oklab, #2a2f37 92%, #dd99bb)",
        "on-surface-secondary": "#c9cad4",
        "theme-accent1": "#6f9283ff",
        "theme-accent2": "#cdc6a5ff",
        "theme-primary1": "#c37d92ff",
        "theme-primary2": "#87bcdeff",
        "theme-secondary1": "#9d79bcff",
        "theme-secondary2": "#d0c88eff",
        "theme-neutral-dark": "#FBFAF9",
        "theme-neutral-light": "#191818",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        heading: [
          "Quicksand",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
        ],
        body: [
          "Poppins",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
        ],
      },
      fontSize: {
        xs: [
          "clamp(0.7rem, 0.9vw, 0.85rem)",
          {
            lineHeight: "1.6",
          },
        ],
        sm: [
          "clamp(0.85rem, 1.1vw, 0.95rem)",
          {
            lineHeight: "1.6",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.6",
          },
        ],
        lg: [
          "clamp(1.05rem, 1.6vw, 1.25rem)",
          {
            lineHeight: "1.6",
          },
        ],
        xl: [
          "clamp(1.25rem, 2.2vw, 1.5rem)",
          {
            lineHeight: "1.6",
          },
        ],
        "2xl": [
          "clamp(1.5rem, 2.8vw, 1.9rem)",
          {
            lineHeight: "1.6",
          },
        ],
        "3xl": [
          "clamp(2.2rem, 4.2vw, 2.8rem)",
          {
            lineHeight: "1.25",
          },
        ],
        "4xl": [
          "clamp(3rem, 6.5vw, 4.5rem)",
          {
            lineHeight: "1.25",
          },
        ],
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "3rem",
        "4xl": "4rem",
      },
      borderRadius: {
        xs: "8px",
        sm: "calc(var(--radius) - 4px)",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
        xl: "32px",
        full: "9999px",
        none: "0px",
        card: "16px",
      },
      boxShadow: {
        "level-1": "0 2px 8px rgba(255, 107, 107, 0.15)",
        "level-2": "0 8px 24px rgba(255, 107, 107, 0.2)",
        "level-3": "0 16px 40px rgba(255, 107, 107, 0.25)",
        "soft-elevated": "0 4px 24px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        "chrome-horizontal": "linear-gradient(90deg, #ff4d80 0%, #4da6ff 100%)",
        "chrome-vertical": "linear-gradient(180deg, #ff4d80 0%, #4da6ff 100%)",
      },
      maxWidth: {
        content: "72rem",
        "dl-maxwidth": "1400px",
      },
      animation: {
        "scroll-y": "scroll-y 20s linear infinite",
        "scroll-x": "scroll-x 20s linear infinite",
      },
      keyframes: {
        "scroll-y": {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-100%)",
          },
        },
        "scroll-x": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
