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
  },
  {
    path: 'yoga-styles',
    loadChildren: () => import('./pages/yoga-styles/yoga-styles.module').then( m => m.YogaStylesPageModule)
  },
  {
    path: 'yoga-exercises',
    loadChildren: () => import('./pages/yoga-exercises/yoga-exercises.module').then( m => m.YogaExercisesPageModule)
  },
  {
    path: 'modal-style',
    loadChildren: () => import('./pages/modal-style/modal-style.module').then( m => m.ModalStylePageModule)
  },
  {
    path: 'view-exercises-yoga-styles',
    loadChildren: () => import('./pages/view-exercises-yoga-styles/view-exercises-yoga-styles.module').then( m => m.ViewExercisesYogaStylesPageModule)
  },
  {
    path: 'add-yoga-exercises',
    loadChildren: () => import('./pages/add-yoga-exercises/add-yoga-exercises.module').then( m => m.AddYogaExercisesPageModule)
  },
  {
    path: 'update-delete-yoga-exercises',
    loadChildren: () => import('./pages/update-delete-yoga-exercises/update-delete-yoga-exercises.module').then( m => m.UpdateDeleteYogaExercisesPageModule)
  },
  {
    path: 'streching-targets',
    loadChildren: () => import('./pages/streching-targets/streching-targets.module').then( m => m.StrechingTargetsPageModule)
  },
  {
    path: 'streching-exercises',
    loadChildren: () => import('./pages/streching-exercises/streching-exercises.module').then( m => m.StrechingExercisesPageModule)
  },
  {
    path: 'modal-streching-target',
    loadChildren: () => import('./pages/modal-streching-target/modal-streching-target.module').then( m => m.ModalStrechingTargetPageModule)
  },
  {
    path: 'view-exercises-streching-target',
    loadChildren: () => import('./pages/view-exercises-streching-target/view-exercises-streching-target.module').then( m => m.ViewExercisesStrechingTargetPageModule)
  },
  {
    path: 'update-delete-streching-exercises',
    loadChildren: () => import('./pages/update-delete-streching-exercises/update-delete-streching-exercises.module').then( m => m.UpdateDeleteStrechingExercisesPageModule)
  },
  {
    path: 'add-streching-exercises',
    loadChildren: () => import('./pages/add-streching-exercises/add-streching-exercises.module').then( m => m.AddStrechingExercisesPageModule)
  },
  {
    path: 'outdoors-types',
    loadChildren: () => import('./pages/outdoors-types/outdoors-types.module').then( m => m.OutdoorsTypesPageModule)
  },
  {
    path: 'outdoors-activities',
    loadChildren: () => import('./pages/outdoors-activities/outdoors-activities.module').then( m => m.OutdoorsActivitiesPageModule)
  },
  {
    path: 'modal-outdoors-type',
    loadChildren: () => import('./pages/modal-outdoors-type/modal-outdoors-type.module').then( m => m.ModalOutdoorsTypePageModule)
  },
  {
    path: 'view-activities-outdoors-types',
    loadChildren: () => import('./pages/view-activities-outdoors-types/view-activities-outdoors-types.module').then( m => m.ViewActivitiesOutdoorsTypesPageModule)
  },
  {
    path: 'add-outdoors-activity',
    loadChildren: () => import('./pages/add-outdoors-activity/add-outdoors-activity.module').then( m => m.AddOutdoorsActivityPageModule)
  },
  {
    path: 'update-delete-outdoors-activity',
    loadChildren: () => import('./pages/update-delete-outdoors-activity/update-delete-outdoors-activity.module').then( m => m.UpdateDeleteOutdoorsActivityPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'dashboard/create-routine',
    loadChildren: () => import('./pages/create-routine/create-routine.module').then( m => m.CreateRoutinePageModule)
  },
  {
    path: 'muscles-group-for-routine',
    loadChildren: () => import('./pages/muscles-group-for-routine/muscles-group-for-routine.module').then( m => m.MusclesGroupForRoutinePageModule)
  },
  {
    path: 'edit-routine',
    loadChildren: () => import('./pages/edit-routine/edit-routine.module').then( m => m.EditRoutinePageModule)
  },
  {
    path: 'ratings',
    loadChildren: () => import('./pages/ratings/ratings.module').then( m => m.RatingsPageModule)
  },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
