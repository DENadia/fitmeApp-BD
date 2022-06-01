import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { DashboardModule } from '../pages/dashboard/dashboard.module';
import { RoutinesModule } from '../pages/routines/routines.module';
import { ChallengeModule } from '../pages/challenge/challenge.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    DashboardModule,
    RoutinesModule,
    ChallengeModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
