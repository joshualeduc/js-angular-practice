import { Injectable } from '@angular/core';
import { Route, preloadingStrategy } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class SelectiveStrategy implements preloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    if(route.data && route.data['preload']){
      return load();
    }
    return Observable.of(null);
  }
}
