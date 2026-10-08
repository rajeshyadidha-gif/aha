import { Component } from '@angular/core';
import { FamilyentertainersService } from 'src/app/navigatingcomponenets/service copy/familyentertainers.service';

@Component({
  selector: 'app-familyentertainers',
  templateUrl: './familyentertainers.component.html',
  styleUrls: ['./familyentertainers.component.css']
})
export class FamilyentertainersComponent {
    images:any;
   constructor(private service:FamilyentertainersService){}
   ngOnInit(){
      this.service.ram().subscribe(data=>this.images=data);
  
  }

}
