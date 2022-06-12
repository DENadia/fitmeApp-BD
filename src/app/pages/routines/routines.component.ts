import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.scss'],
})
export class RoutinesComponent implements OnInit {
  routines=null;
  constructor(private dataFirebase: DatafirebaseService,
    private router: Router) {
    this.dataFirebase.getCategories().subscribe((res)=>{
      console.log(res);
      this.routines=res;
      });
   }

  ngOnInit() {}
  public goToDetails(name): void{
    this.router.navigateByUrl(`/${name}`);
  }

}
