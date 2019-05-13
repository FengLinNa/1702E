// html插件
const HtmlWebPackPlugin = require('html-webpack-plugin')
// 清空dist
const CleanWebpackPlugin = require('clean-webpack-plugin')
// 分离CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 压缩js
const TerserJSPlugin = require('terser-webpack-plugin');
// 压缩css
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

module.exports = {
  output: {
    filename: 'assets/[name].js',
    path: __dirname + '/dist/'
  },
  module: {
    rules: [{
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            // 1024 = 1kb
            limit: 10240,
            name: 'assets/[name].[hash:6].[ext]',
          }
        }
      },
      {
        test: /\.(eot|ttf|svg|woff)$/,
        use: ['url-loader']
      }
    ]
  },
  plugins: [
    // 打包前清空
    new CleanWebpackPlugin(),
    // 自动注入
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: true,
      minify: {
         //压缩代码
         minimize: true,
         //移除注释
         removeComments: true,
         //去掉空格
         collapseWhitespace: true,
         //压缩行内css
         minifyCSS: true,
         //压缩行内js
         minifyJS: false
      }
    }),
    // 抽离css
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
      chunkFilename: 'assets/[id].css'
    })
  ],
  devServer: {
    hot: true,
    open: true,
    before(app) {
      app.get('/api/banner', (req, res, next) => {
        res.end(JSON.stringify({
          code: 1,
          data: 'banner'
        }))
      })
    }
  },
  resolve: {
    // 别名
    alias: {
      '@': path.join(__dirname, 'src')
    },
    // 省略后缀
    extensions: ['.js', '.json', '.css', '.vue']
  },
  optimization: {
    minimizer: [
      // 压缩js
      new TerserJSPlugin({}),
      // 压缩css
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      cacheGroups: {
          vendor: {   // 抽离第三方插件
              test: /node_modules/,   // 指定是node_modules下的第三方包
              chunks: 'initial',
              name: 'vendor',  // 打包后的文件名，任意命名    
              // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
              priority: 10    
          },
          utils: { // 抽离自己写的公共代码，utils这个名字可以随意起
              chunks: 'initial',
              name: 'utils',  // 任意命名
              minChunks: 2,
              minSize: 0    // 只要超出0字节就生成一个新包
          }
      }
    }
  }
}