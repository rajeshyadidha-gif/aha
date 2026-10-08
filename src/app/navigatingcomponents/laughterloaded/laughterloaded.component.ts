import { Component } from '@angular/core';
import { LaughterloadedService } from 'src/app/navigatingcomponenets/service copy/laughterloaded.service';

@Component({
  selector: 'app-laughterloaded',
  templateUrl: './laughterloaded.component.html',
  styleUrls: ['./laughterloaded.component.css']
})
export class LaughterloadedComponent {
    images:any;
   constructor(private service:LaughterloadedService){}
   ngOnInit(){
      this.service.ram().subscribe(data=>this.images=data);
  
  }

}
