import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxJSShareRoutingModule } from './rxjs-share-routing.module';
import { ParentComponent } from './parent/parent.component';
import { SiblingComponent } from './sibling/sibling.component';



@NgModule({
  declarations: [
    ParentComponent,
    SiblingComponent
  ],
  imports: [
    CommonModule,
    RxJSShareRoutingModule
  ]
})
export class RxjsShareModule { }
