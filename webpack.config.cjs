const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: 'pf2ools.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader', 
                exclude: /node_modules/,
            }
        ]
    },
    resolve:
    {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { context: './src/',            from: '**/*.json',  to: './' },
                { context: './images/',         from: '**/*',       to: './images' },
                { context: './packs/',          from: '**/*',       to: './packs' },
                { context: './src/templates',   from: '**/*',       to: './templates' },
                { context: './',                from: 'LICENSE',    to: './' },
            ]
        })
    ]
}