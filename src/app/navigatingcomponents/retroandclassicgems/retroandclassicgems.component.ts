import { Component } from '@angular/core';
import { RetroandclassicgemsService } from 'src/app/navigatingcomponenets/service copy/retroandclassicgems.service';

@Component({
  selector: 'app-retroandclassicgems',
  templateUrl: './retroandclassicgems.component.html',
  styleUrls: ['./retroandclassicgems.component.css']
})
export class RetroandclassicgemsComponent {
    images:any;
   constructor(private service:RetroandclassicgemsService){}
   ngOnInit(){
      this.service.ram().subscribe(data=>this.images=data);
  
  }

}
