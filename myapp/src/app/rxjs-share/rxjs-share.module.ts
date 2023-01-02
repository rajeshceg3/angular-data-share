import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { SiblingComponent } from './sibling/sibling.component';



@NgModule({
  declarations: [
    ParentComponent,
    SiblingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RxjsShareModule { }
