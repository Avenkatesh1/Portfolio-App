import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showSignUp: boolean = false;

  constructor() { }

  toggleSignUp() {
    this.showSignUp = !this.showSignUp;
  }
}
