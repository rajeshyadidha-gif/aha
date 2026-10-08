import { Component } from '@angular/core';
import { MollywoodmoodService } from 'src/app/navigatingcomponenets/service copy/mollywoodmood.service';

@Component({
  selector: 'app-mollywoodmood',
  templateUrl: './mollywoodmood.component.html',
  styleUrls: ['./mollywoodmood.component.css']
})
export class MollywoodmoodComponent {
    images:any;
   constructor(private service:MollywoodmoodService){}
   ngOnInit(){
      this.service.ram().subscribe(data=>this.images=data);
  
  }

}
