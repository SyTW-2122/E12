import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './_helpers/auth.guard';
import { TokenInterceptorService } from './_services/token-interceptor.service';
import { BillboardComponent } from './components/billboard/billboard.component';
import { HomeComponent } from './components/home/home.component';
import { FilmSketchComponent } from './components/film-sketch/film-sketch.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BillboardComponent,
    HomeComponent,
    FilmSketchComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    AuthGuard, 
    { provide: HTTP_INTERCEPTORS, useClass:  TokenInterceptorService, multi: true}
    // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
