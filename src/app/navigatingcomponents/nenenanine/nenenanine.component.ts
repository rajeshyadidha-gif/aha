import { Component } from '@angular/core';
import { NenenanineService } from 'src/app/navigatingcomponenets/service copy/nenenanine.service';

@Component({
  selector: 'app-nenenanine',
  templateUrl: './nenenanine.component.html',
  styleUrls: ['./nenenanine.component.css']
})
export class NenenanineComponent {
    images:any;
   constructor(private service:NenenanineService){}
   ngOnInit(){
      this.service.ram().subscribe(data=>this.images=data);
  
  }

}
