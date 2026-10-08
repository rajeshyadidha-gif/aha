import { Component } from '@angular/core';
import { ComedytimeService } from 'src/app/navigatingcomponenets/service copy/comedytime.service';

@Component({
  selector: 'app-comedytime',
  templateUrl: './comedytime.component.html',
  styleUrls: ['./comedytime.component.css']
})
export class ComedytimeComponent {
    images:any;
   constructor(private service:ComedytimeService){}
   ngOnInit(){
      this.service.ram().subscribe(data=>this.images=data);
  
  }

}
