const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    loader: 'ts-loader'
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // npm i html-webpack-plugin -D
        // 通过一个模版来生成网站的首页同时嵌入输出文件
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        })
    ]
}
