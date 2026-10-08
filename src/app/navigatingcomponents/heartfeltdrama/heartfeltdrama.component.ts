import { Component } from '@angular/core';
import { HeartbeatstoriesService } from 'src/app/navigatingcomponenets/service copy/heartbeatstories.service';

@Component({
  selector: 'app-heartfeltdrama',
  templateUrl: './heartfeltdrama.component.html',
  styleUrls: ['./heartfeltdrama.component.css']
})
export class HeartfeltdramaComponent {
    images:any;
   constructor(private service:HeartbeatstoriesService){}
   ngOnInit(){
      this.service.ram().subscribe(data=>this.images=data);
  
  }

}
