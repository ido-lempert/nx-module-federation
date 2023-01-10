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
