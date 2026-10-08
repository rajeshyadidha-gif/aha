import { Component } from '@angular/core';
import { Watchin4k } from 'src/app/navigatingcomponenets/models copy/watchin4k';
import { Watchin4kService } from 'src/app/navigatingcomponenets/service copy/watchin4k.service';
@Component({
  selector: 'app-watchin4k',
  templateUrl: './watchin4k.component.html',
  styleUrls: ['./watchin4k.component.css']
})
export class Watchin4kComponent {
    images:any;
   constructor(private service:Watchin4kService){}
   ngOnInit(){
      this.service.ram().subscribe(data=>this.images=data);
  
  }

}
