var path = require('path');

// STEPS TO REPRODUCE:
// Try these webpack configurations one by one.

// I.
// Running `npm start` with this config will result in an unfound
// `bundle.js`.

module.exports = {
  entry: './src/entry.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '*']
  }
};

// II.
// Running `npm start` with this config will work as expected.

// module.exports = {
//   entry: './src/entry.jsx',
//   output: {
//     filename: './build/bundle.js'
//   },
//   module: {
//     loaders: [
//       {
//         test: [/\.jsx?$/],
//         exclude: /(node_modules)/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['es2015']
//         }
//       }
//     ]
//   },
//   devtool: 'source-map',
//   resolve: {
//     extensions: ['.js', '*']
//   }
// };

// III.
// This configuration places the `bundle.js` in the root directory.
// Before running it, go to the `index.html` and make sure that the
// first script tag is commented out and that the second script tag is
// commented in. Then, run `npm start`. It will work as expected.

// module.exports = {
//   entry: './src/entry.jsx',
//   output: {
//     path: path.resolve(__dirname),
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [
//       {
//         test: [/\.jsx?$/],
//         exclude: /(node_modules)/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['es2015']
//         }
//       }
//     ]
//   },
//   devtool: 'source-map',
//   resolve: {
//     extensions: ['.js', '*']
//   }
// };

// IV.
// Run `npm run webpack` with the original configuration (below) and
// open the `index.html` in the browser. It will find the `bundle.js`,
// even though webpack-dev-server was not able to.

// module.exports = {
//   entry: './src/entry.jsx',
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [
//       {
//         test: [/\.jsx?$/],
//         exclude: /(node_modules)/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['es2015']
//         }
//       }
//     ]
//   },
//   devtool: 'source-map',
//   resolve: {
//     extensions: ['.js', '*']
//   }
// };
