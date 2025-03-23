import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn", // Change "error" to "warn" if you want to allow it
        { 
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_" 
        }
      ],
      "next/next/no-img-element": "off", // Disables <img> warnings if needed
    },
  },
];

export default eslintConfig;
