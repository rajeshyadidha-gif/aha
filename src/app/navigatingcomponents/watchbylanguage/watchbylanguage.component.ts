import { Component } from '@angular/core';
import { WatchbylanguageService } from 'src/app/navigatingcomponenets/service copy/watchbylanguage.service';

@Component({
  selector: 'app-watchbylanguage',
  templateUrl: './watchbylanguage.component.html',
  styleUrls: ['./watchbylanguage.component.css']
})
export class WatchbylanguageComponent {
    images:any;
   constructor(private service:WatchbylanguageService){}
   ngOnInit(){
      this.service.ram().subscribe(data=>this.images=data);
  
  }

}
