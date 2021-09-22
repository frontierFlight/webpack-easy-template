const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    // entry: './src/index.js',
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                // use: ['style-loader','css-loader'],
                use: [
                    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader'
                ]
                // use: [
                //     {
                //         loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                //         // options: { 
                //         //     injectType: 'linkTag',// styleTag
                //         // }
                //     },
                //     // { loader: "file-loader" },
                //     {
                //         loader: 'css-loader',
                //         // options: {
                //         //     modules: {
                //         //         mode: "local",
                //         //         auto: true,
                //         //         exportGlobals: true,
                //         //         localIdentName: "[path][name]__[local]--[hash:base64:5]",//
                //         //         localIdentContext: path.resolve(__dirname, "src"),
                //         //         localIdentHashSalt: "my-custom-hash",
                //         //         namedExport: true,
                //         //         exportLocalsConvention: "camelCase",
                //         //         exportOnlyLocals: false,
                //         //     },
                //         // },
                //     }
                // ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack-Easy-Template',
            template: 'index.html'
        }),
        new MiniCssExtractPlugin()
    ],
};