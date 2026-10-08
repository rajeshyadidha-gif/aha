import { Component } from '@angular/core';
import { LovediariesService } from 'src/app/navigatingcomponenets/service copy/lovediaries.service';

@Component({
  selector: 'app-lovediaries',
  templateUrl: './lovediaries.component.html',
  styleUrls: ['./lovediaries.component.css']
})
export class LovediariesComponent {
    images:any;
   constructor(private service:LovediariesService){}
   ngOnInit(){
      this.service.ram().subscribe(data=>this.images=data);
  
  }
}
