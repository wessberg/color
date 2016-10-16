import babel from "rollup-plugin-babel";
import filesize from "rollup-plugin-filesize";
import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import {minify} from "uglify-js";
import uglify from "rollup-plugin-uglify";

export default {
  entry: "./src/colorutilities.js",
  plugins: [
		nodeResolve({
			main: true,
			jsnext: true
		}),
		commonjs(),
		babel(),
		uglify({
			compress: {
				warnings: false,
				dead_code: true,
				unsafe: true,
				drop_console: true,
				unused: true,
				loops: true,
				booleans: true,
				conditionals: true,
				sequences: true,
				properties: true,
				comparisons: true,
				if_return: true,
				join_vars: true,
				cascade: true,
				collapse_vars: true
			},
			screwIE8: true,
			comments: false,
			mangle: true
		}, minify),
		filesize()
	]
};
