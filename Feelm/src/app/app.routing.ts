import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';
import { LoginComponent } from '../app/login/login.component';
import { AuthGuard } from '../app/_helpers/auth.guard';

const routes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] }, 
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const appRoutingModule = RouterModule.forRoot(routes);