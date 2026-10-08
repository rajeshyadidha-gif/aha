import { Component } from '@angular/core';
import { MostwatchedintamilService } from 'src/app/navigatingcomponenets/service copy/mostwatchedintamil.service';

@Component({
  selector: 'app-mostwatchedintelugu',
  templateUrl: './mostwatchedintelugu.component.html',
  styleUrls: ['./mostwatchedintelugu.component.css']
})
export class MostwatchedinteluguComponent {
    images:any;
   constructor(private service:MostwatchedintamilService){}
   ngOnInit(){
      this.service.ram().subscribe(data=>this.images=data);
  
  }

}
