import { Component } from '@angular/core';
import { AhaoriginalsService } from 'src/app/navigatingcomponenets/service copy/ahaoriginals.service';

@Component({
  selector: 'app-ahaoriginals',
  templateUrl: './ahaoriginals.component.html',
  styleUrls: ['./ahaoriginals.component.css']
})
export class AhaoriginalsComponent {
  images:any;
 constructor(private service:AhaoriginalsService){}
 ngOnInit(){
    this.service.ram().subscribe(data=>this.images=data);

}
}
