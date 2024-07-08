import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import globals from "globals";
import babelParser from "@babel/eslint-parser";
import path from "path";
import { fileURLToPath } from "url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

const config = [
    ...fixupConfigRules(compat.extends("plugin:react/recommended")),
    {
        plugins: {
            react: fixupPluginRules(react),
        },
        files: ["**/*.js", "**/*.jsx"],

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                Atomics: "readonly",
                SharedArrayBuffer: "readonly",
            },

            parser: babelParser,
            ecmaVersion: 2024,
            sourceType: "module",

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        settings: {
            react: {
                version: "detect",
            },
        },

        rules: {
            "max-len": ["error", {
                code: 12000,
            }],

            "require-jsdoc": 0,
            "linebreak-style": 1,
            "no-invalid-this": 0,
        },
    },
];

export default config;
