const path = require("path");
const entryPath = ".";

module.exports = {
  entry: `./${entryPath}/app.js`,
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `${entryPath}/build`)
  },
  devServer: {
    contentBase: path.join(__dirname, `${entryPath}`),
    publicPath: "/build/",
    compress: true,
    port: 3001,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader","sass-loader"]
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  }

};