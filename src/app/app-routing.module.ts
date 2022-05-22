import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';

const routes: Routes = [
  { path: 'todo/:filter', component: HomeComponent },
  { path: '', redirectTo: 'todo/all', pathMatch: 'full' },
  { path: '**', redirectTo: 'todo/all', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
