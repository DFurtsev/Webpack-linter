/* eslint-disable */
const { merge } = require('webpack-merge');
const path = require('path');
const commonConfig = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    }
}

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        return merge(commonConfig, {
            mode: 'development',
            devServer: {
                static: './dist',
                hot: true,
            },
        });
    } else {
        return merge(commonConfig, {
            mode: 'production',
        });
    }
}