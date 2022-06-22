import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { timer } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AlertProvider, LoadingProvider } from 'src/providers';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  credential: FormGroup;

    constructor(private formBuilder:  FormBuilder,
                private loadingControler: LoadingController,
                private authService: AuthService,
                private alertController: AlertController,
                private router: Router,
                private alertProvider:AlertProvider)
                {}
        get email(){
            return this.credential.get('email');
        }
        get password(){
            return this.credential.get('password');
        }
    ngOnInit() {
        this.credential=this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
         password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
    async login(){
        const loading=await this.loadingControler.create();
        await loading.present();
     const user=await this.authService.login(this.credential.value);
     await loading.dismiss();
     if(user)
     {
         this.router.navigateByUrl('/tabs', {replaceUrl:true});
     }else{
         this.showAlert('Login failed', 'Please try again');
     }
    }
    // async onLogin() {
    //     const loader = await this.loadingProvider.create();
    //     await loader.present();
    //     timer(2000).subscribe(r => {
    //         loader.dismiss().then(() => {
    //             this.router.navigateByUrl('/tabs');
    //         });
    //     }, error => loader.dismiss().then(() => this.alertProvider.present(error)));
    // }
    async showAlert(header, message){
        const alert= await this.alertController.create({
            header,
            message,
            buttons:['OK'],
        });
        await alert.present();
    }
}
