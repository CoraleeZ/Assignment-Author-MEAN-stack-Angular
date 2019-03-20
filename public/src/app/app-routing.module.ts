import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayComponent } from './display/display.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
// import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'new', component: AddComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '**', component: DisplayComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
