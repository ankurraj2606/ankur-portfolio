module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "off", // Disabled for context providers which commonly export both hooks and components
    ],
    "react/prop-types": "off", // Since we're not using PropTypes
    "no-unused-vars": [
      "error",
      { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
    ],
    "react/react-in-jsx-scope": "off", // Not needed with new JSX transform
    "react/no-unescaped-entities": "off", // Allow apostrophes in JSX
    "prefer-const": "error",
    "no-var": "error",
  },
};
