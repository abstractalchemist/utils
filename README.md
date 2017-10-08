#usage

GET request
```
import http from 'utils'
http({ method: "GET", url:"/home"})
```

POST request with body
```
import http from 'utils'
http({ method: "POST", url:"/home"}, {})
```

with Rx js
```
import http from 'utils'
import Rx from 'rx'
Rx.Observable.fromPromise(http({ method: "GET", url:"/home"}))
```