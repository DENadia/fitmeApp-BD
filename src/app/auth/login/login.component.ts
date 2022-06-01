import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { timer } from 'rxjs';
import { AlertProvider, LoadingProvider } from 'src/providers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  lForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private loadingProvider: LoadingProvider,
                private alertProvider: AlertProvider,
                private router: Router) {
        this.lForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(6)]],
            pwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
        });
    }

    ngOnInit() {
    }

    async onLogin() {
        const loader = await this.loadingProvider.create();
        await loader.present();
        timer(2000).subscribe(r => {
            loader.dismiss().then(() => {
                this.router.navigateByUrl('/tabs');
            });
        }, error => loader.dismiss().then(() => this.alertProvider.present(error)));
    }
}
