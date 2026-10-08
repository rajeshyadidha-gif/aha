import { Component } from '@angular/core';
import { LatestreleasesService } from 'src/app/navigatingcomponenets/service copy/latestreleases.service';

@Component({
  selector: 'app-latestreleases',
  templateUrl: './latestreleases.component.html',
  styleUrls: ['./latestreleases.component.css']
})
export class LatestreleasesComponent {
  images:any;
  constructor(private service:LatestreleasesService){}
  ngOnInit(){
    this.service.onsubmit().subscribe(data=>this.images=data)
  }
}
