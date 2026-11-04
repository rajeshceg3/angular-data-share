import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'rxjs-sharing', loadChildren: () => import('./rxjs-share/rxjs-share.module').then(m => m.RxjsShareModule) },
  { path: '', redirectTo: 'rxjs-sharing/parent', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
