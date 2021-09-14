import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {User} from '../models/User'
import { Observable } from 'rxjs';
import { catchError, first, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
const API_HOST = environment.apiHost;

@Injectable({
  providedIn: 'root'
})
export class UserListCrudService {

  private url = API_HOST + "/all";
  private urltwo = API_HOST + "/register";
  private urlput = API_HOST + "/user";

  httpOptions: {headers: HttpHeaders} = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  };

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url, {responseType:"json"});//.pipe(tap((_)=>console.log("fetched users")));
  }

  checkUser(email:String, password:String): Observable<User[]> {
    const urllogin = `${API_HOST}/login/${email}/${password}`;
    console.log (urllogin)
    return this.http.get<User[]>(urllogin, {responseType:"json"});//.pipe(tap((_)=>console.log("fetched users")));
  }
  // post(email: String, password: String): Observable<any>{
  //   return this.http.post<any>(this.urltwo,{email:email,password:password},this.httpOptions);
  // }

  post(user: Omit<User, "id">): Observable<User>{
    return this.http.post<User>(this.urltwo,user,this.httpOptions).pipe(first());
  }

  update(user: User): Observable<User>{
    return this.http.put<User>(this.urlput,user,this.httpOptions).pipe(first());
  }

  delete(id:number):Observable<any>{
    const urlthree = `${API_HOST}/user/${id}`;
    return this.http.delete<User>(urlthree,this.httpOptions);
  }
}
