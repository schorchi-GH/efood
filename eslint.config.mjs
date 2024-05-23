import globals from 'globals'
import js from '@eslint/js'
import ts from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import prettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
    {
        files: ['src/**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            parser: parser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true
                }
            },
            globals: globals.browser
        },
        plugins: {
            react,
            '@typescript-eslint': ts,
            prettier: prettierPlugin
        },
        rules: {
            'prettier/prettier': 'error',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'react/prop-types': 'off',
            'react/react-in-jsx-scope': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off'
        }
    },
    js.configs.recommended,
    ts.configs.recommended,
    react.configs.recommended,
    prettier
]
