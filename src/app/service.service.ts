// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';
// import { of, from, Observable } from 'rxjs';
// import { Users } from './user/users';


// @Injectable({
//   providedIn: 'root'
// })
// export class ServiceService {
// value:any;
  
// constructor(private http:HttpClient) { }
// httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json'
//   })
// }  
// url = "http://localhost:3004";
// // getUser(): Observable<Users> {
// //   return this.http.get<Users>(this.url +'/users')
  
// // }

// // getOneUser(id:any): Observable<Users> {
// // return this.http.get<Users>(this.url + '/users/' + id)
// // } 

// // createlist(user: Users): Observable<Users> {
// //   return this.http.post<Users>(this.url +'/users/', 
// //   JSON.stringify(user),
// //    this.httpOptions)
   
// // }

// // updateuser(user:Users,id:number): Observable<Users> {
// // return this.http.put<Users>(this.url + '/users/' + id,
// //  JSON.stringify(user), this.httpOptions)
 
// // }
// users: Users [] = [];

// getUser(): Observable<Users[]> {
//   let usersValue = localStorage.getItem("users");
//   if(usersValue!=null || usersValue!= undefined){
//     this.users = JSON.parse(usersValue);
//   }
//   return of(this.users);
// }

// getOneUser(id:any): Observable<Users> {
//   // let index = localStorage.getItem("id");
//   // if(index!=null || index!= undefined){
//   //   id = JSON.parse(index);
//   // }
//   return of(id);
// } 

// createlist(user: Users): Observable<Users> {
 
//   let usersValue = localStorage.getItem("users");
//   if(usersValue!=null || usersValue!= undefined){
//     this.users = JSON.parse(usersValue);
//   }
//   else{
//     this.users =[];
//   }
//   this.users.push(user);
//   localStorage.setItem("users",JSON.stringify(this.users));
//   return of(user);
// }

// updateuser(user:Users,id:number): Observable<Users> {
//   // let usersValue = localStorage.getItem("users");
//   // if(usersValue!=null || usersValue!= undefined){
//   //   this.users = JSON.parse(usersValue);
//   // }
//   // else{
//   //   this.users =[];
//   // }
//   // if(user.id!=null && user.id==JSON.parse(localStorage.getItem('id'))){
//   //   this.users.push(user);
//   //   localStorage.setItem("users",JSON.stringify(this.users));
//   // }
//   return of(user);
 
// }

// }