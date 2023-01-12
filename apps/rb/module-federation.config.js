module.exports = {
  name: 'rb',
  // remotes: ['credit', 'capital-market'],
  shared: (name, config) => {
    // console.log(name, config);
    // if (name === '@poalim/auth') return false;
    return config;
  }
};
