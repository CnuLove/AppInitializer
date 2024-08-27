import { Injectable } from '@angular/core';
import { CustominitializerService } from './Initilaizer/custominitializer.service';

@Injectable({
  providedIn: 'root'
})
export class ActualService {

  constructor(private customeservice:CustominitializerService) { }


  getdata(){
    return this.customeservice.getapi;
  }
}
