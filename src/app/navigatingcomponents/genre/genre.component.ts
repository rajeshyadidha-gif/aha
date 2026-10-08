import { Component } from '@angular/core';
import { GenreService } from 'src/app/navigatingcomponenets/service copy/genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent {
    images:any;
   constructor(private service:GenreService){}
   ngOnInit(){
      this.service.ram().subscribe(data=>this.images=data);
  
  }

}
