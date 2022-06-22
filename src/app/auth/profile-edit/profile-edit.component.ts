import { Component, Input, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
})
export class ProfileEditComponent implements OnInit {
  @Input() user: any;
  email='';
  name='';
  constructor(private auth: AuthService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.email=this.user.userEmail;
    this.name=this.user.userName;
    console.log(this.email, this.name);
  }

}
