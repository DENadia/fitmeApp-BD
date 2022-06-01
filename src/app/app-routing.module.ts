import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'welcome',
    pathMatch:'full'
  },
  {
    path:'home',
    loadChildren:()=>import('./auth/home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'welcome',
    loadChildren:()=>import('./auth/welcome/welcome.module').then(m=>m.WelcomeModule)
  },
  {
     path: 'login', 
     loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) 
  },
  {
    path: 'signup', 
    loadChildren: () => import('./auth/signup/signup.module').then(m => m.SignupModule) 
 },
 {
  path: 'forgot-password', 
  loadChildren: () => import('./auth/forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordModule) 
},
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
