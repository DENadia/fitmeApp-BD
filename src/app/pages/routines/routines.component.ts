import { Component, OnInit } from '@angular/core';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.scss'],
})
export class RoutinesComponent implements OnInit {
  routines=null;
  constructor(private dataFirebase: DatafirebaseService) {
    this.dataFirebase.getCategories().subscribe((res)=>{
      console.log(res);
      this.routines=res;
      });
   }

  ngOnInit() {}
  public goToDetails(name):void{
    console.log("click pe o rutina "+ name);
    console.log(this.routines[1]);
  }

}
