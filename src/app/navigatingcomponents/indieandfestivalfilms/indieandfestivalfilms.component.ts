import { Component } from '@angular/core';
import { IndieandfestivalfilmsService } from 'src/app/navigatingcomponenets/services/indieandfestivalfilms.service';

@Component({
  selector: 'app-indieandfestivalfilms',
  templateUrl: './indieandfestivalfilms.component.html',
  styleUrls: ['./indieandfestivalfilms.component.css']
})
export class IndieandfestivalfilmsComponent {
      images:any;
     constructor(private service:IndieandfestivalfilmsService){}
     ngOnInit(){
        this.service.ram().subscribe(data=>this.images=data);
    
    }

}
