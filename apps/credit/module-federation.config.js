module.exports = {
  name: 'credit',
  exposes: {
    './Module': 'apps/credit/src/app/remote-entry/entry.module.ts',
    './loan-request.module': 'apps/credit/src/app/loan-request/loan-request.module.ts',
  }
};
