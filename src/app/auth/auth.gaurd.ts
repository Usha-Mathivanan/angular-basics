import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';



@Injectable()
export class AuthGaurd implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }
    canActivate() {
        return this.checkLogin();
    }

    checkLogin() {
        if (this.authService.isLogIn) {
            return true;
        } else {
            this.router.navigate(['']);
            return false;
        }
    }
}