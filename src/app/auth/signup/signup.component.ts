import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChildActivationStart, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { timer } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';
import { AlertProvider, LoadingProvider } from 'src/providers';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  credential: FormGroup;
  categories=null;
  yoga=null;
  streching=null;
  outdoor=null;
  constructor(private formBuilder: FormBuilder,
    private loadingControler: LoadingController,
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router,
    private alertProvider: AlertProvider,
    public auth: Auth,
    public dataService: DatafirebaseService) { 
      this.dataService.getMusclesGroups().subscribe((mg)=>{
        this.categories=mg;
        });
        this.dataService.getYogaStyles().subscribe(y=>{
          this.yoga=y;
        });
        this.dataService.getStrechingTargets().subscribe(s=>{
          this.streching=s;
        });
        this.dataService.getOutdoorsTypes().subscribe(ot=>{
          this.outdoor=ot;
        });
    }
  get name() {
    return this.credential.get('name');
  }
  get password() {
    return this.credential.get('password');
  }
  get email() {
    return this.credential.get('email');
  }
  ngOnInit() {
    this.credential = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  async register() {
    const loading = await this.loadingControler.create({
      message: 'processing',
      spinner: 'crescent',
      showBackdrop: true
    });
    loading.present();
    this.authService.register(this.credential.get('email').value, this.credential.get('password').value).then((res) => {
      const userr = this.auth.currentUser;
      
      this.authService.addUser({
        userId: userr.uid,
        userName: this.credential.get('name').value,
        userEmail: this.credential.get('email').value,
        userPhoto: '',
      }, userr.uid).then(() => {
        this.categories.forEach(category => {
          this.dataService.addUserMuscles(this.auth.currentUser.uid, {categoryName: category.name});
          this.dataService.getExercises('workout',category.name).subscribe(reusult=>{
            reusult.forEach(r=>{
             this.dataService.addUserExercise(this.auth.currentUser.uid,{exerciseName:r.exercise_name, category:r.category});
            });
          });
         });
         this.yoga.forEach(yogaItem=>{
          this.dataService.addUserYogaStyle(this.auth.currentUser.uid, {name: yogaItem.name});
          this.dataService.getYogaExercises(yogaItem.categoryId).subscribe(yogaResult=>{
            yogaResult.forEach(yogaExercise=>{  
              this.dataService.addUserYogaExercise(this.auth.currentUser.uid, 
                {
                  name: yogaExercise.name, 
                  style: yogaItem.categoryId,
                  description: yogaExercise.description
                });
            });
          });
         });

         this.streching.forEach(strechingItem=>{
          this.dataService.addUserStrechingTargets(this.auth.currentUser.uid,{name: strechingItem.name});
          this.dataService.getStrechingExercises(strechingItem.categoryId).subscribe(strechingResult=>{
            strechingResult.forEach(strechingExercise=>{
              this.dataService.addUserStrechingExercise(this.auth.currentUser.uid, 
                {
                  name:strechingExercise.name,
                  target: strechingExercise.target,
                  description:strechingExercise.description
                });
            });
          });
         });

         this.outdoor.forEach(outdoorType=>{
          this.dataService.addUserOutdoorsTypes(this.auth.currentUser.uid,{name: outdoorType.name});
          this.dataService.getOutdoorsActivities(outdoorType.typeId).subscribe(outdoorResult=>{
            outdoorResult.forEach(outdoorActivity=>{
              this.dataService.addUserOutdoorsActivity(this.auth.currentUser.uid, 
                {
                  name:outdoorActivity.name,
                  type: outdoorActivity.type,
                });
              });
            });
          });

        loading.dismiss();
        this.router.navigateByUrl('/login', { replaceUrl: true });
      }).catch((error) => {
        loading.dismiss();
        this.showAlert('Registration failed', error.message);
      });
    }).catch((error) => {
      loading.dismiss();
      if (error.code === 'auth/email-already-in-use') {
        this.showAlert('Registration failed', 'Email already in use!');
      }
    });
  }
  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
