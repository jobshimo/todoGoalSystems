import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';

const routes: Routes = [
  { path: 'home/:filter', component: HomeComponent },
  { path: '', redirectTo: 'home/all', pathMatch: 'full' },
  { path: '**', redirectTo: 'home/all', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
