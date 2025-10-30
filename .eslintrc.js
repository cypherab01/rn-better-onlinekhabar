module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "@react-native",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "react-hooks",
    "react-refresh",
    "prettier",
    "import",
  ],
  rules: {
    // --- TypeScript strictness ---
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-function": "warn",

    // --- Hooks correctness ---
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // --- General JS hygiene ---
    "no-unused-vars": "off", // handled by TS version above
    "no-console": "warn",
    "no-debugger": "warn",
    "no-empty": "warn",
    eqeqeq: ["error", "always"],
    curly: "error",
    "no-undef": "error",

    // --- Import order (optional) ---
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal"],
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],

    // --- Prettier integration ---
    "prettier/prettier": [
      "warn",
      {
        singleQuote: true,
        semi: true,
        trailingComma: "es5",
        printWidth: 100,
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
