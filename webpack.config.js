// импортируем html-webpack-plugin с помощью require
const HtmlWebpackPlugin = require("html-webpack-plugin");

// подключим плагин к webpack
// webpack объединит дефолтную конфигурацию с нашей
module.exports = {
  mode: "development", // нужно, чтобы легче было смотреть в собранные артефакты
  devtool: "source-map",

  plugins: [
    new HtmlWebpackPlugin({
      // укажем шаблон html-файла
      template: "./src/index.html"
    })
  ]
};
