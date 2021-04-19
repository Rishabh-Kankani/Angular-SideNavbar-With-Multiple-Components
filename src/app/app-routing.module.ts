import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {NavigationHeaderComponent} from './navigation-header/navigation-header.component';
import {RegisterCandidateComponent} from './register-candidate/register-candidate.component';
import {DatatableComponent} from './datatable/datatable.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'default', component: HomeComponent},
  {path: 'register', children: [
      {path: 'new-registration', component: RegisterCandidateComponent}
  ]},
  {path: 'candidate-data', component: DatatableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomeComponent, AppComponent, DatatableComponent, NavigationHeaderComponent, RegisterCandidateComponent ];
