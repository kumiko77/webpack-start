const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        clean: true,
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [                
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            {
                test: /\.(png|jpe?g|gif|webp|svg)$/, type: 'asset', parser: {
                    dataUrlCondition: {
                        // 小于10kb的图片转base64
                        // 优点： 减少请求量
                        // 缺点： 增加了文件体积                                        
                        maxSize: 10 * 1024
                    }
                },
                generator: {
                    filename: 'images/[name].[hash:6][ext][query]'
                }               
            },
            {
                test: /\.(ttf|woff2?)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[hash:6][ext][query]'
                }
            }
        ]
    },
    plugins: [],
    mode: 'development'
}