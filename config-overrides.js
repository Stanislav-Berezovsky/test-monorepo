const path = require('path');
const config = require('dotenv').config();

module.exports = {
    paths: function (paths, env) {
        const mapPaths = {
            first: {
                appBuild: path.resolve(__dirname, 'build/first-app/'),
                appSrc: path.resolve(__dirname, 'first-app/src'),
                appIndexJs: path.resolve(__dirname, 'first-app/src/index.js'),
                appPublicL: path.resolve(__dirname, 'first-app/public')
            },
            second: {
                appBuild: path.resolve(__dirname, 'build/second-app/'),
                appSrc: path.resolve(__dirname, 'second-app/src'),
                appIndexJs: path.resolve(__dirname, 'second-app/src/index.js'),
                appPublicL: path.resolve(__dirname, 'second-app/public')
            }
        }
        console.log('paths', paths)
        console.log('process_env', process.env.APP_NAME);
        console.log('config', config);

        console.log('path_config', mapPaths[process.env.APP_NAME])
        return {
            ...paths,
            ...mapPaths[process.env.APP_NAME],
        };
    }
}
