import { Component, OnInit } from '@angular/core';
import { ActualService } from './actual.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Appinitializer';
  endpoint:string|undefined;
    constructor(private actualservice:ActualService){}

ngOnInit(): void {
  this.endpoint=this.actualservice.getdata()
}
}
