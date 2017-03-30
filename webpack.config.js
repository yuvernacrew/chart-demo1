

module.exports = {
  entry: __dirname + "/src/main.js", //ビルドの起点になるファイルのパスを指定(配列で複数指定可能)
  output: {
    path: __dirname + '/dist', //ビルドしたファイルを吐き出す場所
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
       test: /\.vue$/,
       loader: 'vue-loader'
      },

      {
       test: /\.js$/,
       loader: 'babel-loader',
       exclude: /node_modules/,
       query://loaderに渡したいクエリパラメータを指定します
        {
          presets: ['es2015','stage-0']
        }
      },
      {
        test: /\.(jpg|png)$/,
        loaders: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', 'vuex', '.json']
  }
};
