const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Giriş dosyasını belirt
  output: {
    path: path.resolve(__dirname, 'dist'), // Çıktı dosyasının kaydedileceği dizin
    filename: 'bundle.js', // Çıktı dosyasının adı
  },
  module: {
    rules: [
      {
        test: /\.js$/, // .js uzantılı dosyaları işle
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Babel kullanarak JavaScript'i işle
        },
      },
      {
        test: /\.css$/, // CSS dosyalarını işleme
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // HTML şablonunu belirt
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // Sunucu içeriğini belirle
    compress: true,
    port: 9000, // Sunucu portu
  },
};
