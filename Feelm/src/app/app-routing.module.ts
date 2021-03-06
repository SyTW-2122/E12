import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './_helpers/auth.guard';
import { BillboardComponent } from './components/billboard/billboard.component';
import { FilmSketchComponent } from './components/film-sketch/film-sketch.component';
import { ProfileComponent } from './components/profile/profile.component';

const appRoutes: Routes = [
  {path: "", redirectTo: '/login', pathMatch: "full"}, 
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent, canActivate: [AuthGuard]}, 
  {path: "cartelera", component: BillboardComponent, canActivate: [AuthGuard]}, 
  {path: "pelicula", component: FilmSketchComponent, canActivate: [AuthGuard]}, 
  {path: "perfil", component: ProfileComponent, canActivate: [AuthGuard]}, 
  // otherwise redirect to home
  { path: '**', redirectTo: 'login' }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
