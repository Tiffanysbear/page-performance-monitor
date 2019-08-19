/**
 * @file: rollup.config.js
 * @author: Tiffany
 */
// Rollup plugins
import resolve from 'rollup-plugin-node-resolve';
import commonjs from '@baidu/rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify-es';
export default [
    {
        input: 'src/index.js',
        output: {
            file: 'dist/index.js',
            format: 'umd',
            name: 'Perf',
            legacy: true,
            strict: false,
            sourceMap: true
        },
        plugins: [
            resolve(),
            commonjs(),
            babel({
                runtimeHelpers: true,
                exclude: 'node_modules/**'
            }),
            uglify()
        ]
    }
];