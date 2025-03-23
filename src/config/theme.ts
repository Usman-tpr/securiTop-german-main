import { siteConfig } from "./siteConfig";

export const theme = {
  colors: {
    primary: siteConfig.colors.primary,
    secondary: siteConfig.colors.secondary,
    accent: siteConfig.colors.accent,
    background: siteConfig.colors.background,
    text: siteConfig.colors.text,
    
    // Additional derived colors
    primaryLight: "#1A3980", // Lighter version of primary
    primaryDark: "#001A4D", // Darker version of primary
    secondaryLight: "#FFDF33", // Lighter version of secondary
    secondaryDark: "#CCAC00", // Darker version of secondary
    
    // Utility colors
    white: "#FFFFFF",
    black: "#000000",
    gray: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    },
    success: "#10B981", // Green
    error: "#EF4444",   // Red
    warning: "#F59E0B", // Amber
    info: "#3B82F6",    // Blue
  },
  
  fontFamily: {
    heading: "'Roboto', sans-serif",
    body: "'Open Sans', sans-serif",
  },
  
  fontSize: {
    xs: "0.75rem",     // 12px
    sm: "0.875rem",    // 14px
    base: "1rem",      // 16px
    lg: "1.125rem",    // 18px
    xl: "1.25rem",     // 20px
    "2xl": "1.5rem",   // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem",  // 36px
    "5xl": "3rem",     // 48px
    "6xl": "3.75rem",  // 60px
    "7xl": "4.5rem",   // 72px
    "8xl": "6rem",     // 96px
  },
  
  spacing: {
    // Match with Tailwind's default spacing scale
    px: "1px",
    0: "0",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },
  
  borderRadius: {
    none: "0",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  
  boxShadow: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    none: "none",
  },
  
  transitionDuration: {
    DEFAULT: "150ms",
    75: "75ms",
    100: "100ms",
    150: "150ms",
    200: "200ms",
    300: "300ms",
    500: "500ms",
    700: "700ms",
    1000: "1000ms",
  },
  
  zIndex: {
    0: "0",
    10: "10",
    20: "20",
    30: "30",
    40: "40",
    50: "50",
    auto: "auto",
  },
  
  animation: {
    fadeIn: "fadeIn 0.5s ease-in-out",
    slideUp: "slideUp 0.5s ease-in-out",
    slideDown: "slideDown 0.5s ease-in-out",
    slideLeft: "slideLeft 0.5s ease-in-out",
    slideRight: "slideRight 0.5s ease-in-out",
    pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    spin: "spin 1s linear infinite",
  },
  
  keyframes: {
    fadeIn: {
      "0%": { opacity: "0" },
      "100%": { opacity: "1" },
    },
    slideUp: {
      "0%": { transform: "translateY(20px)", opacity: "0" },
      "100%": { transform: "translateY(0)", opacity: "1" },
    },
    slideDown: {
      "0%": { transform: "translateY(-20px)", opacity: "0" },
      "100%": { transform: "translateY(0)", opacity: "1" },
    },
    slideLeft: {
      "0%": { transform: "translateX(20px)", opacity: "0" },
      "100%": { transform: "translateX(0)", opacity: "1" },
    },
    slideRight: {
      "0%": { transform: "translateX(-20px)", opacity: "0" },
      "100%": { transform: "translateX(0)", opacity: "1" },
    },
    pulse: {
      "0%, 100%": { opacity: "1" },
      "50%": { opacity: "0.5" },
    },
    spin: {
      to: { transform: "rotate(360deg)" },
    },
  },
}; 