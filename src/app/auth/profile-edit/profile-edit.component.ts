import { Component, Input, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { ModalController, PickerController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
})
export class ProfileEditComponent implements OnInit {
  @Input() user: any;
  email='';
  name='';
  activeCoef: string;
  gender: string;
  age: number;
  height: number;
  weight: number;
  goal: string;

  goals=['lose weight', 'mantain', 'gain weight (muscles)'];
  coefs=[
    {
      name:'sedentary',
      val: 1.20
    },
    {
      name:'lightly active',
      val: 1.37
    },
    {
      name:'moderately active',
      val: 1.55
    },
    {
      name:'very active',
      val: 1.72
    },
    {
      name:'extremely active',
      val: 1.90
    }
  ];
  constructor(private auth: AuthService,
    private modalCtrl: ModalController,
    private dataService: DatafirebaseService,
    private authC: Auth) { }

  ngOnInit() {
    this.email=this.user.userEmail;
    this.name=this.user.userName;
    this.dataService.getUserCaloriesData(this.authC.currentUser.uid).subscribe(res=>{
      console.log(res);
      if(res)
      {
        this.activeCoef=res[0].active;
        this.gender=res[0].gender;
        this.age=res[0].age;
        this.height=res[0].height;
        this.weight=res[0].height;
        this.goal=res[0].goal;
      }
      else{
        console.log("nada");
      }
    });
  }
  calculate(){
    console.log("gender: "+ this.gender + ", age: "+this.age+" , height: "+this.height+", weight: "+this.weight+", active: "+this.activeCoef+", goal: "+this.goal);
    let calories=0;
    calories=66.5+(13.75*this.weight)+(5.003*this.height)-(6.755*this.age);
    calories=Math.round(calories);
    console.log(calories);
    // this.dataService.addUserCaloriesData(this.authC.currentUser.uid, {
    //   gender: this.gender,
    //   age: this.age,
    //   height: this.height,
    //   weight: this.weight,
    //   active: this.activeCoef,
    //   goal:this.goal

    // });
    let index=this.coefs.find(elem=>{
      return elem.name===this.activeCoef
    });
    
    calories=calories*index.val;
    calories=Math.round(calories);
    this.modalCtrl.dismiss();
  }
}
