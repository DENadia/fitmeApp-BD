import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  gList = [];
list: Array<any>;
pageList = [1, 2, 3, 4];

isActive = false;

toggle() {
    this.isActive = !this.isActive;
}

constructor(private dataService: DatafirebaseService, private auth: Auth) {
  this.dataService.getUserExercises(this.auth.currentUser.uid).subscribe(res=>{
    res.forEach(r=>{
      this.gList.push({
        name:  r.exerciseName
      });
    })
    
  });
    this.list = this.gList;
}

ngOnInit() {
}

onSearch(event) {
    const key = event.target.value.toLowerCase();
    this.list = this.gList.filter(p => p.name.toLowerCase().includes(key));
}

onPage(item) {
    const index = item * this.gList.length;
    this.list = this.gList.slice(index, index + this.gList.length);
}

}
