import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from  '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  myHeaders = new HttpHeaders().set("authkey","value");
  myparams= new HttpParams().set("employeedetails","value1");
// By using Httpclient i am taking the url from json & getting the data from json server & returning that data to the web through api
  postEmployee(data : any){
    return this.http.post<any>("http://localhost:3000/posts/", data)
    .pipe(map((res:any)=>{   // with the values that comes through our observable.
      return res;
    }))
  }
// It will get the employee details through this api 
  getEmployee(){
    return this.http.get<any>("http://localhost:3000/posts",)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateEmployee(data : any, id:number){
    return this.http.put<any>("http://localhost:3000/posts/"+id , data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteEmployee(id:number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id )
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
