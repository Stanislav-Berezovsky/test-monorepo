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

        newConfig = rewireBabelLoader.include(
            {
                ...config,
                resolve: newConfig
            },
            path.resolve(__dirname,"common")
          );
        
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
                appTypeDeclarations: path.resolve(__dirname, 'react-app-env.d.ts'),
            },
            second: {
                appBuild: path.resolve(__dirname, 'build/second-app/'),
                appSrc: path.resolve(__dirname, 'second-app/src'),
                appIndexJs: path.resolve(__dirname, 'second-app/src/index.tsx'),
                appPublic: path.resolve(__dirname, 'second-app/public'),
                appHtml: path.resolve(__dirname, 'second-app/public/index.html'),
                appTypeDeclarations: path.resolve(__dirname, 'react-app-env.d.ts'),
            }
        }

        return {
            ...paths,
            ...mapPaths[process.env.APP_NAME],
        };
    }
}
