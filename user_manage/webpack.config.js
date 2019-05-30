var path = require('path')
var fs = require('fs')
var webpack = require('webpack')
var bodyParser = require('body-parser')
const data = require('./data.json')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|woff|ttf2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve('./src')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    before(app){
      // 获取用户列表
      app.get('/user/list', (req, res, next)=>{
        let data = fs.readFileSync('./data.json');
        data = JSON.parse(data);
        res.json({
          code: 1,
          data
        })
      })
      // 删除用户
      app.delete('/user/delete', bodyParser.json(), (req, res, next)=>{
        let id = req.body.id;
        let data = fs.readFileSync('./data.json');
        data = JSON.parse(data);
        let index = data.findIndex(item=>item.id==id);
        data.splice(index, 1);
        fs.writeFileSync('./data.json', JSON.stringify(data));
        res.json({
          code: 1
        })
      })
      // 添加用户
      app.post('/user/add', bodyParser.json(), (req, res, next)=>{
        let {name, className} = req.body;
        let data = fs.readFileSync('./data.json');
        data = JSON.parse(data);
        data.push({
          id: data.length+1,
          name,
          className
        })
        fs.writeFileSync('./data.json', JSON.stringify(data));
        res.json({
          code: 1
        })
      })
      // 修改用户
      app.put('/user/update', bodyParser.json(), (req, res, next)=>{
        let id = req.body.id;
        let data = fs.readFileSync('./data.json');
        data = JSON.parse(data);
        let index = data.findIndex(item=>item.id==id);
        data[index] = {...data[index], ...req.body}
        fs.writeFileSync('./data.json', JSON.stringify(data));
        res.json({
          code: 1
        })
      })
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
