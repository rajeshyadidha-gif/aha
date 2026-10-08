import { Component } from '@angular/core';
import { MysteryandsupernaturalService } from 'src/app/navigatingcomponenets/service copy/mysteryandsupernatural.service';

@Component({
  selector: 'app-mysteryandsupernatural',
  templateUrl: './mysteryandsupernatural.component.html',
  styleUrls: ['./mysteryandsupernatural.component.css']
})
export class MysteryandsupernaturalComponent {
    images:any;
   constructor(private service:MysteryandsupernaturalService){}
   ngOnInit(){
      this.service.ram().subscribe(data=>this.images=data);
  
  }

}
