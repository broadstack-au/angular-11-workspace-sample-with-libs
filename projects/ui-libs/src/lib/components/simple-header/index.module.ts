import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleHeaderComponent } from './index.component';



@NgModule({
  declarations: [
    SimpleHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SimpleHeaderComponent
  ]
})
export class SimpleHeaderModule { }
