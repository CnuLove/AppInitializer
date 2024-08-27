import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { BehaviorSubject, filter, map } from 'rxjs';
interface IApiendpoint{
  apiendpoint:string
}
@Injectable({
  providedIn: 'root'
})
export class CustominitializerService {

  constructor(private http:HttpClient) { }

  private endpoint= new BehaviorSubject<IApiendpoint|null>(null);

  readonly api$=this.endpoint.asObservable().pipe(
    filter(res=> !!res),
    map(res=>res?.apiendpoint)
  )
get getapi(){
  return this.endpoint.getValue()?.apiendpoint;
}
  fetchApiendPoint(){

    this.http.get<IApiendpoint>("http://localhost:5028/api/Json/apiget")
    .subscribe({
      next:(responsedata)=> this.endpoint.next(responsedata),
      error:()=>this.endpoint.next({apiendpoint:""})
    })
  }
}
