# 1 - host & remote app

create host app named *rb*:
```nx g @nrwl/angular:host rb```

create remote app named *credit*:
```nx g @nrwl/angular:remote credit --host rb```

## create lazy route *loans-request*
```nx g m loan-request --project credit --routing```
```nx g c loan-request --project credit```

## genrate lib
```nx g lib auth```
```nx s accounts --project auth```

https://webpack.js.org/plugins/module-federation-plugin/#sharing-hints
```
  shared: (name, config) => {
    if (name == '@poalim/auth') return false;
    // We want lodash to be tree shaken, and bundled into each host/remote separately.
    return config;
  },
```
