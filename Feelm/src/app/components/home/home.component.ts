import { Component } from '@angular/core';
import { first } from 'rxjs/operators';


import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({ 
    selector: 'app-home',
    templateUrl: 'home.component.html',    
    styleUrls: ['./home.component.css'] 
    })

export class HomeComponent {
    loading = false;
    user = '';

    constructor(
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.loading = true; 
    }

    logout() {
        this.authService.logout()
    }
}
