const path = require('path')

// const {
//     override,
// } = require('customize-cra');

module.exports = {
    // The Webpack config to use when compiling your react app for development or production.
    // webpack: function(config, env) {
    //   // ...add your webpack config
    //   console.log('test_path_1', path.resolve(__dirname, 'second-app/src/index.js'));
    //   console.log('test_path_2', path.resolve(__dirname, 'node_modules/react-dev-utils/webpackHotDevClient.js'));
    //   console.log('initial_config', config);
    //   const newConfig = { 
    //     ...config,
    //     // context: path.resolve(__dirname, 'second-app/src'),
    //     // entry: {
    //     //     // main: path.resolve(__dirname, 'second-app/src/index.js'),
    //     //     main: './index.js'
    //     // }
    //     entry: [
    //         path.resolve(__dirname, 'node_modules/react-dev-utils/webpackHotDevClient.js'),
    //         path.resolve(__dirname, 'second-app/src/index.js')
    //       ]
    //   }
    //   return newConfig;
    // },
    paths: function(paths, env) {
        console.log('paths',paths)
        // ...add your paths config
        return {
            ...paths,
            appSrc:path.resolve(__dirname, 'second-app/src'),
            appIndexJs: path.resolve(__dirname, 'second-app/src/index.jsx')
        };
    }
  }

    
//   module.exports = override(
//     config => {
//       console.log(config.entry);
//       console.log([
//         path.resolve(__dirname, 'node_modules/react-dev-utils/webpackHotDevClient.js'),
//         path.resolve(__dirname, 'second-app/src/index.jsx')
//       ]);
//       const newConfig = { 
//         ...config,
//         // context: path.resolve(__dirname, 'second-app/src'),
//         // entry: {
//         //     // main: path.resolve(__dirname, 'second-app/src/index.js'),
//         //     main: './index.js'
//         // }
//         entry: [
//             path.resolve(__dirname, 'node_modules/react-dev-utils/webpackHotDevClient.js'),
//             path.resolve(__dirname, 'second-app/src/index.jsx')
//           ]
//       }
//       return newConfig;
//     },
//   );