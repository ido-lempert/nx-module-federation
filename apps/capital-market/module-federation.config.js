module.exports = {
  name: 'capital-market',
  remotes: ['credit'],
  exposes: {
    './Module': 'apps/capital-market/src/app/remote-entry/entry.module.ts',
  },
};
