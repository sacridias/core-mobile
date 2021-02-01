module.exports = {
	"root": true,
	"env": {
		"es2021": true,
	},
	"ignorePatterns": ["coverage/**", ".templates/**", ".vscode/**"],
	"extends": [ "@react-native-community" ],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true,
		},
		"ecmaVersion": 12,
		"sourceType": "module",
	},
	"rules": {
		"prettier/prettier": 0,
		//Fixes for regular expression compiler.
		"radix": "off",
		"no-useless-escape": "off",

		"no-alert": "warn",
		"indent": [
			"error",
			"tab",
		],
		"linebreak-style": [
			"error",
			"unix",
		],
		"quotes": [
			"error",
			"double",
		],
		"semi": [
			"error",
			"always",
		],
	},
};
