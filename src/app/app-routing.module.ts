import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './todo/create/create.component';
import { ListComponent } from './todo/list/list.component';
import { UpdateComponent } from './todo/update/update.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo/list',
    pathMatch: 'full'
  },
  {
    path: 'todo/create',
    component: CreateComponent
  },
  {
    path: 'todo/update/:id',
    component: UpdateComponent
  },
  {
    path: 'todo/list',
    component: ListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
