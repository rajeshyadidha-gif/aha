import { Component } from '@angular/core';
import { InthespotlightService } from 'src/app/navigatingcomponenets/service copy/inthespotlight.service';

@Component({
  selector: 'app-inthespotlight',
  templateUrl: './inthespotlight.component.html',
  styleUrls: ['./inthespotlight.component.css']
})
export class InthespotlightComponent {
    images:any;
   constructor(private service:InthespotlightService){}
   ngOnInit(){
      this.service.ram().subscribe(data=>this.images=data);
  
  }

}
