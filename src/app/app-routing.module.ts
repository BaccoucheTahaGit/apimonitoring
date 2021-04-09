import { ApiGuard } from './api.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { apiListComponent } from './components/api-list/api-list.component';
import { apiDetailsComponent } from './components/api-details/api-details.component';
import { AddapiComponent } from './components/add-api/add-api.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { registrationComponent } from './registration/registration.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';

const routes: Routes = [
  { path: '', redirectTo: 'api', pathMatch: 'full' },
  { path: 'api', component: apiListComponent },
  { path: 'api/:id', component: apiDetailsComponent },
  { path: 'add', component: AddapiComponent,canActivate:[ApiGuard] },
  {path: 'forbidden', component: ForbiddenComponent},
  {path: 'login', component: LoginComponent},
  {path:"",redirectTo:"register",pathMatch:"full"},
   {path:"register",component:registrationComponent},
   {path:"search",component:SearchDeleteComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
