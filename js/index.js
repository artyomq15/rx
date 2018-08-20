'use strict';

import * as Rx from 'rx';

/*let isDown = false;

let observable = Rx.Observable.fromEvent(document, 'mousemove');

observable.subscribe(
    x => isDown? console.log('next: ', x.clientX, "; ", x.clientY, ' DOWN') :console.log('next: ', x.clientX, "; ", x.clientY),
    err => console.error('error: ', err),
    () => console.log('completed')
);

Rx.Observable.fromEvent(document, 'mousedown')
    .subscribe(
        x => isDown = true
    );
Rx.Observable.fromEvent(document, 'mouseup')
    .subscribe(
        x => isDown = false
    );
*/

/*Rx.Observable.from([1, 2, 3, 3, 3, 4, 5, 8, 8, 8, 6, 6, 5, 3, 2 ,1])
    .distinctUntilChanged()
    .subscribe( x => console.log(x) );
*/

/*Rx.Observable.interval(250)
    .buffer(
        Rx.Observable.fromEvent(document, 'mousedown')
    )
    .subscribe(x => console.log(x));
*/

/*Rx.Observable.range(1,3)
    .map(x => Rx.Observable.range(1, 3))
    .concatAll()
    .subscribe(x => console.log(x));
*/

/*Rx.Observable.from([1,2,3])
    .mergeMap(x => Rx.Observable.range(x, 3))
    .subscribe(x => console.log(x));
*/