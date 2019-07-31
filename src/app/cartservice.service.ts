import { Injectable } from '@angular/core';
import { Icart } from './cart/Icart';

import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Iorder } from './cart/Iorder';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  constructor(private http: HttpClient) { }
  /**
   * method to get cart details from db
   * @param id 
   */
  getcart(id: String): Observable<Icart[]> {
    var url_total = 'http://localhost:8083/cart/view/' + id;
    return this.http.get<Icart[]>(url_total);
  }
  /**
   * http delete mehthod to delete from db
   * @param id 
   */
  delete(id:number){
    var url_total = 'http://localhost:8083/cart/delete/' + id;
    return this.http.delete<Icart[]>(url_total);
  }
  /**
   * 
   * @param cart http put method to update cart data
   */
  updateCart(cart:Icart){
    var url_total = 'http://localhost:8083/cart/update';
    return this.http.put(url_total, cart);

  }
  /**
   * 
   * @param order add cart data to order 
   */
  confirmOrder(order:Iorder){
   
      var url_total = 'http://localhost:8083/cart/order';
      return this.http.post(url_total, order);
    

  }
}
