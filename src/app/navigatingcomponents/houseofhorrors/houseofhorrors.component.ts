import { Component } from '@angular/core';
import { Houseofhorrors } from 'src/app/navigatingcomponenets/models copy/houseofhorrors';
import { HouseofhorrorsService } from 'src/app/navigatingcomponenets/service copy/houseofhorrors.service';

@Component({
  selector: 'app-houseofhorrors',
  templateUrl: './houseofhorrors.component.html',
  styleUrls: ['./houseofhorrors.component.css']
})
export class HouseofhorrorsComponent {
    images:any;
   constructor(private service:HouseofhorrorsService){}
   ngOnInit(){
      this.service.ram().subscribe(data=>this.images=data);
  
  }

}
