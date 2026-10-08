import { Component } from '@angular/core';
import { MostrewatchedgemsService } from 'src/app/navigatingcomponenets/service copy/mostrewatchedgems.service';

@Component({
  selector: 'app-mostwatchedintamil',
  templateUrl: './mostwatchedintamil.component.html',
  styleUrls: ['./mostwatchedintamil.component.css']
})
export class MostwatchedintamilComponent {
    images:any;
   constructor(private service:MostrewatchedgemsService){}
   ngOnInit(){
      this.service.ram().subscribe(data=>this.images=data);
  
  }

}
