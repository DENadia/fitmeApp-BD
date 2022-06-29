import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPaginationComponent } from './custom-pagination.component';


@NgModule({
  declarations: [CustomPaginationComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    CustomPaginationComponent
  ]
})
export class CustomPaginationModule { }
