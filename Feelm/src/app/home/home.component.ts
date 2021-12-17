import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service';

@Component({ 
    selector: 'app-home',
    templateUrl: 'home.component.html',    
    styleUrls: ['./home.component.css'] 
    })

export class HomeComponent {
    loading = false;
    user = '';

    constructor(private userService: UserService, private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.loading = true;
        this.user = this.authenticationService.currentUserValue.email
    }
}
