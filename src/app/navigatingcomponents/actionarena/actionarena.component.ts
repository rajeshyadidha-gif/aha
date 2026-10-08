import { Component } from '@angular/core';
import { Actionarena } from 'src/app/navigatingcomponenets/models copy/actionarena';
import { ActionarenaService } from 'src/app/navigatingcomponenets/service copy/actionarena.service';

@Component({
  selector: 'app-actionarena',
  templateUrl: './actionarena.component.html',
  styleUrls: ['./actionarena.component.css']
})
export class ActionarenaComponent {
  images:any;
 constructor(private service:ActionarenaService){}
 ngOnInit(){
    this.service.ram().subscribe(data=>this.images=data);
}
}
