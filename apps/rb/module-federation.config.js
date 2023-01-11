module.exports = {
  name: 'rb',
  remotes: ['credit'],
  shared: (name, config) => {
    // console.log(name, config);
    // if (name == '@poalim/auth') return false;
    // We want lodash to be tree shaken, and bundled into each host/remote separately.
    return config;
  },
};
