import { Component } from '@angular/core';
import { TrendingnowService } from 'src/app/navigatingcomponenets/service copy/trendingnow.service';

@Component({
  selector: 'app-trendingnow',
  templateUrl: './trendingnow.component.html',
  styleUrls: ['./trendingnow.component.css']
})
export class TrendingnowComponent {
    images:any;
   constructor(private service:TrendingnowService){}
   ngOnInit(){
      this.service.ram().subscribe(data=>this.images=data);
  
  }

}
