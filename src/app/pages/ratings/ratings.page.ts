import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.page.html',
  styleUrls: ['./ratings.page.scss'],
})
export class RatingsPage implements OnInit {
  public form: FormArray;
  exercises=null;
  rating=null;
  constructor(private fb: FormBuilder, private dataService: DatafirebaseService) { 
    this.dataService.getExercisesToBeRated().subscribe(res=>{
      this.exercises=res;
    });
  }
  
  ngOnInit() {
  }
  displayData()
  {
    console.log(this.form.value);
  }
}
