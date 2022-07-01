import { Component, Input, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { ModalController, PickerController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AvatarService } from 'src/app/services/avatar.service';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
})
export class ProfileEditComponent implements OnInit {
  profile=null;
  @Input() user: any;
  email='';
  name='';
  activeCoef: string;
  gender: string;
  age: number;
  height: number;
  weight: number;
  goal: string;
  fatCoef: string;
  update=0;
  goals=['lose weight', 'mantain', 'gain weight (muscles)'];
  coefs=[
    {
      name:'sedentary',
      val: 1.20,
      protein: 0.8
    },
    {
      name:'lightly active',
      val: 1.37,
      protein: 1.0
    },
    {
      name:'moderately active',
      val: 1.55,
      protein: 1.2
    },
    {
      name:'very active',
      val: 1.72,
      protein: 1.4
    },
    {
      name:'extremely active',
      val: 1.90,
      protein: 1.6
    }
  ];
  fats=[
    {
      name: 'lower fat',
      val: 20
    },
    {
      name: 'in between',
      val: 25
    },
    {
      name: 'higher fat',
      val: 30
    }
  ];
  constructor(private auth: AuthService,
    private modalCtrl: ModalController,
    private dataService: DatafirebaseService,
    private authC: Auth,
    ) { 
    
    }

  ngOnInit() {
    this.email=this.user.userEmail;
    this.name=this.user.userName;
    this.dataService.getUserCaloriesData(this.authC.currentUser.uid).subscribe(res=>{
      console.log(res);
      if(res)
      {
        this.update=1;
        this.activeCoef=res.active;
        this.gender=res.gender;
        this.age=res.age;
        this.height=res.height;
        this.weight=res.weight;
        this.goal=res.goal;
        this.fatCoef=res.fatCoef
      }
    });
  }
  calculate(){
   
  
    let caloriesTotal=this.calories();
    console.log(caloriesTotal);
    let gramProtein= this.protein(this.weight);
    let gramFat=this.fat(this.fatCoef,caloriesTotal);
    let gramCarb=this.carbs();
     console.log(gramProtein);
    console.log(gramFat);
    console.log(gramCarb);
    if(this.update===0){
      this.dataService.addUserCaloriesData(this.authC.currentUser.uid, {
        gender: this.gender,
        age: this.age,
        height: this.height,
        weight: this.weight,
        active: this.activeCoef,
        goal:this.goal,
        fatCoef: this.fatCoef,
        calories: caloriesTotal,
        protein: gramProtein,
        fat: gramFat,
        carb: gramCarb
      });
    }else{
      this.dataService.updateUserCaloriesData(this.authC.currentUser.uid, {
        gender: this.gender,
        age: this.age,
        height: this.height,
        weight: this.weight,
        active: this.activeCoef,
        goal:this.goal,
        fatCoef: this.fatCoef,
        calories: caloriesTotal,
        protein: gramProtein,
        fat: gramFat,
        carb: gramCarb
      });
    }
    
    this.modalCtrl.dismiss();
  }

  calories(){
    let calories=0;
    if(this.gender==='Male'){
      calories=66.5+(13.75*this.weight)+(5.003*this.height)-(6.755*this.age);
    }
    else if(this.gender==='Female')
    {
      calories=655.1+(9.563*this.weight)+(1.850*this.height)-(4.676*this.age);
    }
    
    calories=Math.round(calories);
    let index=this.coefs.find(elem=>{
      return elem.name===this.activeCoef
    });
    
    calories=calories*index.val;
    calories=Math.round(calories);
    if(this.goal==='lose weight')
    {
      calories=calories-500;
    }
    else if(this.goal==='gain weight (muscles)')
    {
      calories=calories+300;
    }
    return calories;
  }
  protein(weight){
    let pounds=Math.round(weight*2.2);
    let index=this.coefs.find(elem=>{
      return elem.name===this.activeCoef
    });
    
    let gramProtein= Math.round(pounds*index.protein);
    return gramProtein;
  }
  fat(fatCoef, calories){
    let fatElem=this.fats.find(elem=>{
      return elem.name===fatCoef
    });
    let calFat=Math.round(this.percentage(calories, fatElem.val));
    let gramFat=Math.round(calFat/9);
    return gramFat;
  }
  carbs()
  {
    let proteinCalories=this.protein(this.weight)*4;
    let fatCalories=this.fat(this.fatCoef, this.calories())*9;
    let carbsCalories=this.calories()-proteinCalories-fatCalories;
    let carbsGrams=Math.round(carbsCalories/4);
    return carbsGrams;
  }
   percentage(num, per)
  {
     return (num/100)*per;
  }
}
