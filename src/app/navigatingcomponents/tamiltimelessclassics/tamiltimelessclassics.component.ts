import { Component } from '@angular/core';
import { TamiltimelessclassicService } from 'src/app/navigatingcomponenets/service copy/tamiltimelessclassics.service';

@Component({
  selector: 'app-tamiltimelessclassics',
  templateUrl: './tamiltimelessclassics.component.html',
  styleUrls: ['./tamiltimelessclassics.component.css']
})
export class TamiltimelessclassicsComponent {  
  images:any;
  constructor(private service:TamiltimelessclassicService){}
  ngOnInit(){
    this.service.onsubmit().subscribe(data=>this.images=data)
  }
}
