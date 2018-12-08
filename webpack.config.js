const path = require("path");
const packageJson = require("./package.json");
const dependencies = packageJson.dependencies || {};

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: ['./public/index.html', './src/main.js'],
  },
  resolve: {
    mainFields: ['module', 'main', 'browser'],
    // extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: './dist',
    // host: process.env.WEBPACK_DEV_HOST,
    host: 'localhost',
    // port: process.env.WEBPACK_DEV_PORT
    port: 8080
  },
  // externals: Object.keys(dependencies),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js"
  },
  // resolve: { extensions: [".js", ".jsx"] },
  module: {
    rules: [
      // {
      //   test: require('path').resolve(__dirname, 'node_modules'),
      //   resolve: {mainFields: ['module', 'jsnext:main', 'browser', 'main']}
      // },
      {
        test: /\.js/,
        // exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // options: {
          //   presets: ["env", "react"]
          // }
        }
      },
      {
        test: /\.html/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new Visualizer({ filename: './statistics.html' })
  ],
  optimization: {
    providedExports: true,
    usedExports: true,
    // splitChunks: {
    //   cacheGroups: {
    //     vendor: {
    //       test: /node_modules/,
    //       chunks: 'initial',
    //       name: 'vendor',
    //       enforce: true,
    //       priority: 5,
    //     },
    //   },
    // },
  },
};
