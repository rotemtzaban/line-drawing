import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
const config: webpack.Configuration = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js'],
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
        ],
    },
    plugins: [new CopyWebpackPlugin([{ from: 'index.html' }, {from:'vert.glsl'}, {from:'frag.glsl'}])],
};

export default config;
