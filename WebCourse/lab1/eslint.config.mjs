import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    // env: { browser: true, es2022: true },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    // parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    // rules: {
    //   "no-var": 0,
    // },
  },
]);
