
import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IstoreDetails } from './store/IstoreDetails';
import { Observable } from 'rxjs';
import { IpizzaDetails } from './store/IPizzaDetails';
import { IcartDetails } from './IcartDetails';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private _url = 'http://localhost:8083/store/get/';

  constructor(private http: HttpClient) { }
 /**
  * 
  * @param name http get method to get store details from db
  */
  getStoreDetails(name: String): Observable<IstoreDetails[]> {
    var url_total = this._url + name;
    return this.http.get<IstoreDetails[]>(url_total);
  }
  /**
   * 
   * @param name http get method to get pizza details
   */
  getPizza(name: String): Observable<IpizzaDetails[]> {
    var url_total = 'http://localhost:8083/store/'+name;
    return this.http.get<IpizzaDetails[]>(url_total);
  }
  /**
   * 
   * @param name http post method to post cart data in db
   * @param arr 
   */
  addCart(name:string ,arr:IcartDetails): Observable<any> {
    var url_total = 'http://localhost:8083/cart/add/'+name;
    return this.http.post(url_total, arr);
  }
}
