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
  path: 'profile-edit',
  loadChildren: () => import('./auth/profile-edit/profile-edit.module').then(m => m.ProfileEditModule)
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
  path: 'editor-list',
  loadChildren: ()=> import ('./pages/editor-list/editor-list.module').then(m=>m.EditorListModule)
  },
  {
    path: 'workout-exercises',
    loadChildren: ()=> import ('./pages/workout-exercises/workout-exercises.module').then(m=>m.WorkoutExercisesModule)
    },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'edit-exercise',
    loadChildren: () => import('./pages/edit-exercise/edit-exercise.module').then( m => m.EditExercisePageModule)
  },
  {
    path: 'edit-exercises-category',
    // eslint-disable-next-line max-len
    loadChildren: () => import('./pages/edit-exercises-category/edit-exercises-category.module').then( m => m.EditExercisesCategoryPageModule)
  },
  {
    path: 'workout-routine',
    loadChildren: () => import('./pages/workout-routine/workout-routine.module').then( m => m.WorkoutRoutinePageModule)
  },
  {
    path: 'routine-visualizer',
    loadChildren: () => import('./pages/routine-visualizer/routine-visualizer.module').then( m => m.RoutineVisualizerPageModule)
  },
  {
    path: 'update-delete-exercise',
    loadChildren: () => import('./pages/update-delete-exercise/update-delete-exercise.module').then( m => m.UpdateDeleteExercisePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
