import { Component } from '@angular/core';
import { WatchinteluguandtamilService } from 'src/app/navigatingcomponenets/services/watchinteluguandtamil.service';

@Component({
  selector: 'app-watchinteluguandtamil',
  templateUrl: './watchinteluguandtamil.component.html',
  styleUrls: ['./watchinteluguandtamil.component.css']
})
export class WatchinteluguandtamilComponent {
      images:any;
     constructor(private service:WatchinteluguandtamilService){}
     ngOnInit(){
        this.service.ram().subscribe(data=>this.images=data);
    
    }
  

}
