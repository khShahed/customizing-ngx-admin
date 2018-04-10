import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  user: any = {};
  submitted: boolean = false;

  constructor(protected router: Router) {

  }

  login(): void {
    this.submitted = true;

  }

}
