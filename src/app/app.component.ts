import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import {Router} from '@angular/router';
import { StatusBar } from '@capacitor/status-bar';
import { AlertController, IonRouterOutlet, LoadingController, Platform } from '@ionic/angular';
import { ToastProvider } from 'src/providers';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  lastBackPress = 0;
  timePeriodToExit = 2000;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  public pageList = [
     {iconName: 'person', displayText: 'Account', url: '/profile'},
      {iconName: 'barbell', displayText: 'Workout List', url: '/workout'},
      {iconName: 'accessibility', displayText: 'Yoga List', url: '/yoga'},
      {iconName: 'medkit', displayText: 'Pain relief List', url: '/streching'},
      {iconName: 'bicycle', displayText: 'Outdoor Activities', url: '/outdoor-activities'},
      {iconName: 'search', displayText: 'Search', url: '/search'},
      {iconName: 'time', displayText: 'Timer', url: '/timer'}
  ];

  constructor(
      private platform: Platform,
      private toastProvider: ToastProvider,
      private router: Router,
      private authService: AuthService,
    private loadingController: LoadingController,
    private alertController: AlertController

  ) {
      this.initializeApp();
  }

  initializeApp() {
      this.platform.ready().then(() => {
          // let status bar overlay webview
          // this.statusBar.overlaysWebView(true);
          // set status bar to white
          this.backButton();
      });
  }
  backButton() {
      this.platform.backButton.subscribeWithPriority(1, () => {
          this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
              if (this.router.url === '/home' || this.router.url === '' || this.router.url.toLowerCase().includes('tabs')) {
                  if (new Date().getTime() - this.lastBackPress < this.timePeriodToExit) {
                      navigator['app'].exitApp();
                  } else {
                      this.toastProvider.show('Press back again to exit App');
                      this.lastBackPress = new Date().getTime();
                  }
              } else if (outlet && outlet.canGoBack()) {
                  outlet.pop();
              }
          });
      });
  }
  async logout(){
    await this.authService.logout();
    this.router.navigateByUrl('/welcome', {replaceUrl:true});
  }
}
