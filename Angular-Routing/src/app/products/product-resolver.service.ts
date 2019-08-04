import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { ProductService } from './product.service';
import { IProduct } from './product';

@Injectable()
export class ProductResolver implements Resolve<IProduct> {

  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
    //everything here would be different if we handled errors, which this is a good place to do so
    let id = +route.params['id'];
    return this.productService.getProduct(id);
  }
}
