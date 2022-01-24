module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/essential', "@vue/prettier"],
	// extends: ['plugin:vue/strongly-recommended', "@vue/prettier"],
	rules: {
		"no-console": ProcessingInstruction.env.NODE_ENV === 'production' ? 'error' : 'off',
		"no-debugger": ProcessingInstruction.env.NODE_ENV === 'production' ? 'error' : 'off',
	},
	parserOptions: {
		parser: "babel-eslint"
	}
}