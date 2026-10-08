import { Component } from '@angular/core';
import { HandpickedforyouService } from 'src/app/navigatingcomponenets/service copy/handpickedforyou.service';

@Component({
  selector: 'app-handpickedforyou',
  templateUrl: './handpickedforyou.component.html',
  styleUrls: ['./handpickedforyou.component.css']
})
export class HandpickedforyouComponent {
    images:any;
   constructor(private service:HandpickedforyouService){}
   ngOnInit(){
      this.service.ram().subscribe(data=>this.images=data);
  
  }

}
