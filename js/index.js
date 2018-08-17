'use strict';

import * as Rx from 'rx';

let observable = Rx.Observable.of(1,2,3);

observable.subscribe(
    x => console.log('x = ' + x),
    err => console.log('error: ' + err),
    () => console.log('completed')
);