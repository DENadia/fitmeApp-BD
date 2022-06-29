import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { CustomPaginationComponent } from '../custom-pagination/custom-pagination.component';
import { CustomPaginationModule } from '../custom-pagination/custom-pagination.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    CustomPaginationModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
