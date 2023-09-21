const { defineConfig } = require('@vue/cli-service')
// const CompressionPlugin = require("compression-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  lintOnSave: false, // 语法检查
  productionSourceMap: true, // 源代码映射

  // @重定位到src文件夹
  runtimeCompiler: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  },

  configureWebpack: {
    resolve: {
      fallback: {
        fs: false,
      },
    },
    plugins: [
      new NodePolyfillPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.join(__dirname, './src/utils/seuif97.wasm'),
            to: path.join(__dirname, './dist/js/seuif97.wasm')
          },
        ]
      }
      )
    ],
  },
})
