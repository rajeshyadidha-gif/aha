import { Component } from '@angular/core';
import { UpcomingonahaService } from 'src/app/navigatingcomponenets/service copy/upcomingonaha.service';

@Component({
  selector: 'app-upcomingonaha',
  templateUrl: './upcomingonaha.component.html',
  styleUrls: ['./upcomingonaha.component.css']
})
export class UpcomingonahaComponent {
    images:any;
   constructor(private service:UpcomingonahaService){}
   ngOnInit(){
      this.service.ram().subscribe(data=>this.images=data);
  
  }

}
