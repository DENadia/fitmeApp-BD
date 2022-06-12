import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import{redirectUnauthorizedTo, redirectLoggedInTo, canActivate} from '@angular/fire/auth-guard';
const redirectUnauthorizedToLogin=()=>redirectUnauthorizedTo(['login']);
const redirectLoggedInHome=()=> redirectLoggedInTo(['tabs']);
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
     loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule),
     ...canActivate(redirectLoggedInHome)
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
  path: 'profile',
  loadChildren: () => import('./auth/profile/profile.module').then(m => m.ProfileModule)
},
{
  path: 'timer',
  loadChildren: () => import('./pages/timer/timer.module').then(m => m.TimerModule)
},
{
path: 'streching',
loadChildren: ()=> import ('./pages/streching/streching.module').then(m=>m.StrechingModule)
},
{
path: 'workout',
loadChildren: ()=> import ('./pages/workout/workout.module').then(m=>m.WorkoutModule)
},
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
