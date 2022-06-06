import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import{redirectUnauthorizedTo, redirectLoggedInTo, canActivate} from '@angular/fire/auth-guard';
const redirectUnauthorizedToLogin=()=>redirectUnauthorizedTo(['login']);
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'routines',
        loadChildren: () => import('../pages/routines/routines.module').then(m => m.RoutinesModule)
      },
      {
        path: 'challenge',
        loadChildren: () => import('../pages/challenge/challenge.module').then(m => m.ChallengeModule)
      },
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full',
      }
    ],
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: '',
    redirectTo: '/tabs/dashboard',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
