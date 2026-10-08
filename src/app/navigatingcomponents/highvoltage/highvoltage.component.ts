import { Component } from '@angular/core';
import { HighvoltageService } from 'src/app/navigatingcomponenets/service copy/highvoltage.service';

@Component({
  selector: 'app-highvoltage',
  templateUrl: './highvoltage.component.html',
  styleUrls: ['./highvoltage.component.css']
})
export class HighvoltageComponent {
    images:any;
   constructor(private service:HighvoltageService){}
   ngOnInit(){
      this.service.ram().subscribe(data=>this.images=data);
  
  }

}
