module.exports = function() {
  if (process.env.BUILD_TARGET === 'package') {
    return {};
  }

  return {
    devServer: {
      port: 9000
    },
    entry: {
      'site-mobile': ['./docs/site/mobile']
    }
  };
};
