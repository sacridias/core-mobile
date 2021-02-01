module.exports = {
	preset: "jest-expo",
	collectCoverage: true,
	collectCoverageFrom: [
		"**/*.{ts,tsx}",
		"!**/coverage/**",
		"!**/node_modules/**",
		"!**/babel.config.js",
		"!**/jest.setup.js",
		"!**/.templates/**",
	],
	"activationEvents": [
		"workspaceContains:node_modules/.bin/jest",
		"workspaceContains:node_modules/react-native-scripts",
		"onCommand:io.orta.jest.start",
	],
};
