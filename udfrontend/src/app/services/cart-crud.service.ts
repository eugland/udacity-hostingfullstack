import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Cart } from '../models/Cart'
import { Observable } from 'rxjs';
import { catchError, first, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
const API_HOST = environment.apiHost;


@Injectable({
  providedIn: 'root'
})
export class CartCrudService {
  private url = API_HOST + "/user/cart";


  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private http: HttpClient) { }

  post(cart: Omit<Cart, "cid">): Observable<Cart> {
    return this.http.post<Cart>(this.url, cart, this.httpOptions).pipe(first());
  }

  fetchAll(id: number): Observable<Cart[]> {
    const url2 = `${API_HOST}/user/cart/${id}`;
    console.log(url2)
    return this.http.get<Cart[]>(url2, { responseType: "json" });//.pipe(tap((_)=>console.log("fetched users")));
  }

  delete(cid: number): Observable<any> {
    const urlthree = `${API_HOST}/user/cart/${cid}`;
    return this.http.delete<Cart>(urlthree, this.httpOptions);
  }

  deleteAll(id: number): Observable<any> {
    const urlthree = `${API_HOST}/user/cart/clear/${id}`;
    return this.http.delete<Cart>(urlthree, this.httpOptions);
  }

  getCount(id: number): Observable<any> {
    const url4 = `${API_HOST}/user/cart/items/${id}`;
    return this.http.get<any>(url4, { responseType: "json" });
  }

  getPrice(id: number): Observable<any> {
    const url5 = `${API_HOST}/user/cart/price/${id}`;
    return this.http.get<any>(url5, { responseType: "json" });
  }
}
