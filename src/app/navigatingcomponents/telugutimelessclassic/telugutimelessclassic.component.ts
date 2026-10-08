import { Component } from '@angular/core';
import { TelugutimelessclassicService } from 'src/app/navigatingcomponenets/service copy/telugutimelessclassic.service';

@Component({
  selector: 'app-telugutimelessclassic',
  templateUrl: './telugutimelessclassic.component.html',
  styleUrls: ['./telugutimelessclassic.component.css']
})
export class TelugutimelessclassicComponent {
    images:any;
   constructor(private service:TelugutimelessclassicService){}
   ngOnInit(){
      this.service.ram().subscribe(data=>this.images=data);
  
  }

}
