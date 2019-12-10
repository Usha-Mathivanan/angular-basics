import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    public isLogIn: boolean = false;

    login() {
        this.isLogIn = true;
    }
    logout() {
        this.isLogIn = false;
    }
}