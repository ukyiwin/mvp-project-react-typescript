'use strict';
const path = require('path');
const autoprefixer = require("autoprefixer");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Visualizer = require("webpack-visualizer-plugin");
const razzleHeroku = require("razzle-heroku");
const OfflinePlugin = require('offline-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

const context = path.resolve(__dirname, 'src');

module.exports = {
  modify(baseConfig, { target, dev }, webpack) {
    const config = razzleHeroku(baseConfig, {target, dev}, webpack);
    
    config.resolve.modules = ['src', 'node_modules', 'src/Components', 'src/Graphql', 'src/Containers'];
    config.resolve.alias.Components = path.resolve('./src/Components');
    config.resolve.alias.Graphql = path.resolve('./src/Graphql');
    config.resolve.alias.Containers = path.resolve('./src/Containers');
    config.resolve.alias.Assets = path.resolve('./src/Assets');
    config.resolve.alias.Utils = path.resolve('./src/Utils');
    config.resolve.alias.jquery = path.resolve('node_modules/jquery/src/jquery');
    config.resolve.alias['@material'] = path.resolve('./node_modules/@material');

    config.resolve.extensions = config.resolve.extensions.concat([
      '.ts',
      '.tsx',
      '.js'
    ]);

    config.devtool = 'cheap-module-source-map';

    // Locate eslint-loader and remove it (we're using tslint instead)
    config.module.rules = config.module.rules.filter(
      rule =>
        !(
          Array.isArray(rule.use) &&
          rule.use.length > 0 &&
          rule.use[0].options &&
          'useEslintrc' in rule.use[0].options
        )
    );

    // Safely locate Babel-Loader in Razzle's webpack internals
    const babelLoader = config.module.rules.findIndex(
      rule => rule.options && rule.options.babelrc
    );

    // This tells Razzle which directories to transform.
    const { include } = config.module.rules[babelLoader];

    // Declare our TypeScript loader configuration
    const tsLoader = {
      include,
      test: /\.tsx?$/,
      loader: 'ts-loader',
      options: {
        // this will make errors clickable in `Problems` tab of VSCode
        visualStudioErrorFormat: true,
            // disable type checker - we will use it in fork plugin
            transpileOnly: true,
      },
    };

    const tslintLoader = {
      include,
      enforce: 'pre',
      test: /\.tsx?$/,
      loader: 'tslint-loader',
      options: {
        emitErrors: true,
        configFile: './tslint.json',
      },
    };

    config.module.rules.push(tslintLoader);

    // Fully replace babel-loader with ts-loader
    config.module.rules[babelLoader] = tsLoader;

    // If you want to use Babel & Typescript together (e.g. if you
    // are migrating incrementally and still need some Babel transforms)
    // then do the following:
    //
    // - COMMENT out line 59
    // - UNCOMMENT line 68
    //
    // config.module.rules.push(tsLoader)

    // Setup SCSS
  if (target === "web") {
    const cssLoader = {
      loader: "css-loader",
      options: {
        minimize: !dev,
        sourceMap: dev,
        // importLoaders: 1
      }
    };

    const postCSSLoader = {
        loader: "postcss-loader",
        options: {
          ident: "postcss", // https://webpack.js.org/guides/migrating/#complex-options
          sourceMap: dev,
          plugins: () => [
            autoprefixer({
              browsers: [
                ">1%",
                "last 4 versions",
                "Firefox ESR",
                "not ie < 9" // React doesn't support IE8 anyway
              ]
            })
          ]
        }
    };

    const sassLoader = {
        loader: "sass-loader",
        options: {
          sourceMap: dev
        }
    };

    config.module.rules.push({
      test: /\.less$/,
      use: [
        {
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }
      ]
    });

    /*
    config.module.rules.push({
        // Load .less files from semantic-ui-less module folder
        test: /\.less$/i,
        include: /[/\\]node_modules[/\\]semantic-ui-less[/\\]/,
        use: ExtractTextPlugin.extract({
            use: [
                // Set importLoaders to 2, because there are two more loaders in the chain (postcss-loader
                // and semantic-ui-less-module-loader), which shall be used when loading @import resources
                // in CSS files:
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                        sourceMap: true,
                        minimize: true
                    }
                },
                { loader: 'postcss-loader', options: { sourceMap: true } },
                {
                    loader: 'semantic-ui-less-module-loader',
                    options: {
                        siteFolder: path.resolve(context, 'semantic-ui-theme/site'),
                        themeConfigPath: path.resolve(context, 'semantic-ui-theme/theme.config'),
                    }
                }
            ]
        })
        },
        {
          // Load .png files from semantic-ui-less folder
          test: /\.png$/i,
          include: /[/\\]node_modules[/\\]semantic-ui-less[/\\]/,
          loader: 'file-loader',
          // Use publicPath ../, because this will be used in css files, and to reference an image from the images
          // folder in a css file in the styles folder the relative path is ../images/image-file.ext
          options: { name: 'images/[name].[hash].[ext]', publicPath: '../' }
    });*/

    config.plugins.push(
      new ExtractTextPlugin({
        filename: 'styles/[name].[contenthash].css'
      })
    );

    if (dev) {
      // For development, include source map
      config.module.rules.push({
        test: /\.(css|scss)$/,
        use: ["style-loader", cssLoader, postCSSLoader, sassLoader]
      });
      config.plugins.push(
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.IgnorePlugin(/moment/, /react-kronos/),
        new ExtractTextPlugin({
          filename: 'styles/[name].[contenthash].css'
        }),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        }),
        new Visualizer(),
        new CompressionPlugin({
          cache: true,
          algorithm: 'gzip'
        }),
        new OfflinePlugin()
      );

    } else {
        // For production, extract CSS
        config.module.rules.push({
          test: /\.(css|scss)$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [cssLoader, postCSSLoader, sassLoader]
          })
        });

        config.plugins.push(
          new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
          new webpack.IgnorePlugin(/moment/, /react-kronos/),
          new Visualizer(),
          new ExtractTextPlugin({
            filename: 'styles/[name].[contenthash].css'
          }),
          new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
          }),
          new CompressionPlugin({
            cache: true,
            algorithm: 'gzip'
          }),
          new Visualizer(),
          new OfflinePlugin()
        );
    }
  } else {
    config.module.rules.push({
      test: /\.(css|scss)$/,
      use: ["ignore-loader"]
    });
  }

    return config;
  },
};
