import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './user/users';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  url="http://localhost:3000"
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 
  
  postData(users:any):Observable<Users>{
    return this.http.post<Users>(this.url+'/users/',
    JSON.stringify(users),this.httpOptions
    )
  }
  getData():Observable<Users>{
    return this.http.get<Users>(this.url+'/users',
    this.httpOptions)
  }
  getDataId(id:any):Observable<Users>{
    return this.http.get<Users>(this.url+'/users/'+id,
    this.httpOptions
    )
  }
  
  deleteData(id:any):Observable<Users>{
   return this.http.delete<Users>(this.url+'/users/'+id,
   this.httpOptions)
  }
  updateData(id:any,users:any):Observable<Users>{
   return this.http.put<Users>(this.url+'/users/'+id,
    JSON.stringify(users),this.httpOptions
    )
  }
}
