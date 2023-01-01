import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { RxjsSharingComponent } from './rxjs-sharing/rxjs-sharing/rxjs-sharing.component';
import { ParentComponent } from './rxjs-sharing/parent/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
