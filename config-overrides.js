const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const WorkboxConfig = new WorkboxWebpackPlugin.InjectManifest({
  swSrc: './public/sw.js',
  globDirectory: './public',
  globPatterns: ['**/*.{json,ico,js,png}'],
});

// eslint-disable-next-line no-undef
module.exports = {
  webpack: (config, env) => {
    if (env === 'production') {
      config.plugins.push(WorkboxConfig);
    }

    // remove Workbox service-worker.js generator
    const removed = config.plugins.findIndex(({ constructor: { name } }) => name === 'GenerateSW');
    if (removed !== -1) {
      config.plugins.splice(removed, 1);
    }

    const result = [config];
    // compatibility hack for CRA's build script to support multiple configurations
    // https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/scripts/build.js#L119
    result.output = { publicPath: config.output.publicPath };
    return result;
  },
};
