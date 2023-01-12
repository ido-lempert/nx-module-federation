const { withModuleFederation } = require('@nrwl/angular/module-federation');


const moduleFederationConfig = require('./module-federation.config');
module.exports = withModuleFederation({
  ...moduleFederationConfig,
  // remotes: [
  //   ['credit', 'http://localhost:4201'],
  //   ['capital-market', 'http://localhost:4202']
  // ]
});

// const { ModuleFederationPlugin } = require('webpack').container;
// const {merge} = require('webpack-merge');
//
// module.exports = async (config, context) => {
//   const fromModuleFederation = await withModuleFederation({
//     ...moduleFederationConfig,
//   });
//
//   config = fromModuleFederation(config, context);
//
//   for (const plugin of config.plugins) {
//     if (plugin instanceof ModuleFederationPlugin) {
//       console.log(plugin);
//     }
//     // console.log(plugin instanceof 'ModuleFederationPlugin', plugin);
//   }
//   // update config here...
//
//   return config;
// };
