import {Injectable} from '@angular/core';
import {AlertController} from '@ionic/angular';

@Injectable({providedIn: 'root'})
export class AlertProvider {
    constructor(private alertCtrl: AlertController) {
    }

    async present(msg: string) {
        const alert = await this.alertCtrl.create({
            subHeader: 'Fail to login',
            message: msg,
            buttons: ['OK']
        });
        await alert.present();
    }

}

