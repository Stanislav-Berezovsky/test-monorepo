const path = require('path');
const removeWebpackPlugins = require ('react-app-rewire-unplug');
const config = require('dotenv').config();
const rewireBabelLoader = require("react-app-rewire-babel-loader");

module.exports = {
    webpack: function(config, env) {
        let newConfig = removeWebpackPlugins(config.resolve, env, {
            pluginNames: ['ModuleScopePlugin'],
            verbose: true
        })

        console.log('newConfig', newConfig);
        newConfig = rewireBabelLoader.include(
            {
                ...config,
                resolve: newConfig
            },
            path.resolve(__dirname,"common")
          );
        
        console.log('test', newConfig)
        return newConfig;
      },
    paths: function (paths, env) {
        const mapPaths = {
            first: {
                appBuild: path.resolve(__dirname, 'build/first-app/'),
                appSrc: path.resolve(__dirname, 'first-app/src'),
                appIndexJs: path.resolve(__dirname, 'first-app/src/index.tsx'),
                appPublic: path.resolve(__dirname, 'first-app/public'),
                appHtml: path.resolve(__dirname, 'first-app/public/index.html'),
                appTypeDeclarations: path.resolve(__dirname, 'first-app/src/react-app-env.d.ts'),
            },
            second: {
                appBuild: path.resolve(__dirname, 'build/second-app/'),
                appSrc: path.resolve(__dirname, 'second-app/src'),
                appIndexJs: path.resolve(__dirname, 'second-app/src/index.ts'),
                appPublic: path.resolve(__dirname, 'second-app/public'),
                appHtml: path.resolve(__dirname, 'second-app/public/index.html'),
            }
        }
        // console.log('paths', paths)
        // console.log('process_env', process.env.APP_NAME);
        // console.log('config', config);

        console.log('path_config', mapPaths[process.env.APP_NAME])
        return {
            ...paths,
            ...mapPaths[process.env.APP_NAME],
        };
    }
}
