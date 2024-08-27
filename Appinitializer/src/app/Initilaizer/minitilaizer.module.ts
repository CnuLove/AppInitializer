import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustominitializerService } from './custominitializer.service';
import { take } from 'rxjs';



@NgModule({
providers:[
  {
    provide:APP_INITIALIZER,
    multi:true,
    useFactory:(config:CustominitializerService)=>{
      return ()=>{
        config.fetchApiendPoint();
        return config.api$.pipe(take(1))
      }
    },
    deps:[CustominitializerService]
  }
]
})
export class MInitilaizerModule { }
