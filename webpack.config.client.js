const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    name: "browser",
    //set the process.env.NODE_ENV to the given value and tells Webpack to use its built-in optimizations accordingly.
    mode: "development",

    //define how source maps are generated, if at all.
    devtool: 'eval-source-map',

    //define the entry file where Webpack starts bundling, in this case with the main.js file in the client folder.
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        path.join(CURRENT_WORKING_DIR, 'client/main.js')
    ],
    
    //define the output path for the bundled code, in this case, set to dist/ bundle.js.
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist'),
        filename: 'bundle.js',
        //define the base path for all assets in the application.
        publicPath: '/dist/'
    },

    //set the regex rule for the file extension to be used for transpilation, 
    //and the folders to be excluded. The transpilation tool to be used here is babel-loader.
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: 'file-loader'
            }
        ]
    },  plugins: [
            //enable hot module replacement for react-hot-loader.
            new webpack.HotModuleReplacementPlugin(),
            //allow skipping emitting when there are compile errors.
            new webpack.NoEmitOnErrorsPlugin()
      ]
}

module.exports = config
