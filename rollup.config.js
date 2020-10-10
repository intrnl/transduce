import pkg from './package.json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from '@intrnl/rollup-plugin-esbuild';


/** @type {import('rollup').RollupOptions} */
let config = {
	input: pkg.source,
	output: [
		{ file: pkg.main, format: 'cjs' },
		{ file: pkg.module, format: 'esm' },
	],
	plugins: [
		resolve({ browser: true, extensions: ['.tsx', '.ts', '.jsx', '.mjs', '.js'] }),
		commonjs({ include: 'node_modules/**' }),
		esbuild({ target: 'es2020' }),
	],
};

export default config;
