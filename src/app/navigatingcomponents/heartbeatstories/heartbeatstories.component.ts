import { Component } from '@angular/core';
import { HeartbeatstoriesService } from 'src/app/navigatingcomponenets/service copy/heartbeatstories.service';

@Component({
  selector: 'app-heartbeatstories',
  templateUrl: './heartbeatstories.component.html',
  styleUrls: ['./heartbeatstories.component.css']
})
export class HeartbeatstoriesComponent {
    images:any;
   constructor(private service:HeartbeatstoriesService){}
   ngOnInit(){
      this.service.ram().subscribe(data=>this.images=data);
  
  }

}
