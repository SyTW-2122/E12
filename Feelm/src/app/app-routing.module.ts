import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  {path: "", redirectTo: '/login', pathMatch: "full"}, 
  {path: "login", component: LoginComponent, pathMatch: "full"},
  {path: "home", component: HomeComponent, pathMatch: "full"}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
