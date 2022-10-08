const path = require("path")// 导包
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 导入安装的插件，这里导入的是一个函数
const TerserPlugin = require("terser-webpack-plugin"); // 压缩文件插件

module.exports = {
    // 设置webpack
    mode: "development",// 开发模式
    devtool: "inline-source-map", // 方便查看打包后的代码
    entry: "./src/notice.js",// 设置入口文件路径
    output: {//输出设置
        filename: "notice.js",//文件名
        path: path.resolve(__dirname, "dist"),// 同默认设置
    },
    module: { //添加模块
        rules: [
            {
                test: /\.css$/i,  // 对于.css结尾的文件（无视大小写）
                use: ["style-loader", "css-loader"], // 使用style-loader 和css-loader 两个loader进行处理（需安装） 'yarn add --dev style-loader css-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i, //匹配图片
                type: "asset/resource", //内置模块，直接使用type指定
                // 补充一下图片的使用方法
                // import image1 from "replace to real image path";
                // 这里的 'image1' 就是打包后的image的真实路径，可直接用于image标签的src属性 ！！注意这个是路径
            },
            // 使用babel来转移以使用低版本浏览器
            // 安装三个模块 'yarn add --dev babel-loader @babel/core @babel/preset-env'
            { // 这里可能遇到报错说模块找不到
                //需要用npm 安装对应的模块
                //  报错缺啥安装啥
                test: /\.js$/, // 匹配js文件
                exclude: /node_modules/, // 排除node_modules文件夹（外部），不转译
                use: { // 使用对象形式写，可以设置一些参数
                    loader: "babel-loader", // 使用 babel-loader 这个loader
                    options: { // 添加配置
                        presets: ["@babel/preset-env"], //自动转译
                    }
                }
            },
        ]
    },
    // 使用插件，需要安装
    // 以自动生成html为例
    // yarn add html-webpack-plugin
    plugins: [
        new HtmlWebpackPlugin({ //自动添加网页
            title: "测试网页", // 设置网页标题
        }), // 函数，可以传递参数来设置html

    ],
    optimization: { // 设置压缩配置
        minimize: true, // 启用压缩
        minimizer: [ // 使用什么来压缩
            new TerserPlugin(),
        ]
    }
}