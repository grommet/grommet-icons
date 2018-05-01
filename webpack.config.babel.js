import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const plugins = [
  new CopyWebpackPlugin([
    { from: './README.md' },
    { from: './package.json' },
    { from: './public' },
  ]),
];

export default {
  devtool: 'hidden-source-map',
  entry: './src/js/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'grommet-icons.min.js',
    libraryTarget: 'var',
    library: 'GrommetIcons',
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  plugins,
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
