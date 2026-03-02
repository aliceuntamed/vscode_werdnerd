import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default [
  defineConfig([
    globalIgnores(["dist"]),
    {
      files: ["**/*.{ts,tsx}"],
      extends: [
        // Other configs...
        // Enable lint rules for React
        reactX.configs["recommended-typescript"],
        // Enable lint rules for React DOM
        reactDom.configs.recommended,
      ],
      languageOptions: {
        parserOptions: {
          project: ["./tsconfig.node.json", "./tsconfig.app.json"],
          tsconfigRootDir: import.meta.dirname,
        },
        // other options...
      },

      ignores: ["dist", ".history", "**/*.config.js", "**/*.config.cjs"],
    },
    {
      files: ["**/*.{js,jsx}"],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
        sourceType: "module",
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      plugins: {
        "react-hooks": reactHooks,
        "react-refresh": reactRefresh,
      },
      rules: {
        ...js.configs.recommended.rules,
        ...reactHooks.configs.recommended.rules,
        "react-refresh/only-export-components": [
          "warn",
          { allowConstantExport: true },
        ],
      },
    },
    {
      files: ["**/*.{ts,tsx}"],
      languageOptions: {
        parser: tsparser,
        parserOptions: {
          ecmaVersion: 2020,
          sourceType: "module",
          ecmaFeatures: {
            jsx: true,
          },
        },
        globals: globals.browser,
      },
      plugins: {
        "@typescript-eslint": tseslint,
        "react-hooks": reactHooks,
        "react-refresh": reactRefresh,
      },
      rules: {
        ...tseslint.configs.recommendedTypeChecked,
        ...reactHooks.configs.recommended.rules,
        "react-refresh/only-export-components": [
          "warn",
          { allowConstantExport: true },
        ],
      },
    },
  ]),
];
