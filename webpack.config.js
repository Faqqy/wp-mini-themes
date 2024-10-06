const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: {
        main: './src/index.ts', // also includes admin.js
        tarifpage: './src/tarif.ts'
    },
    devtool: 'source-map',
    devServer: {
        static: './dist',
    },
    resolve: {
        extensions: [
          '.tsx',
          '.ts',
          '.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        clean: true,
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                },
            }
        },
    },

    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(jpg|png|svg|jpeg|gif|webp)$/,
                type: 'asset/resource',
                generator: {
                    filename: "./img/[name][ext]",
                }
            },
            {
                test: /\.(ttf|woff)$/,
                type: 'asset/resource',
                generator: {
                    filename: "./fontss/[name][ext]",
                }
            },
            {
                test: /css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },

        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
          ]
    },
    plugins: [
        new HtmlWebpackPlugin({ filename: 'index.html', template: './src/index.html' }),
        new MiniCssExtractPlugin(),
        
        // new HtmlWebpackPlugin({ filename: 'blog-page.html', template: './src/blog-page.html' })
    ],
};

