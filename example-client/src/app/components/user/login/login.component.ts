import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  username;
  password;
  errorMessage: string = '';

  ngOnInit() {
  }

  userLogin() {
    this.loginService.loginUser(this.username, this.password).subscribe(
    (result:any) => {
      if(result.auth) {
        localStorage.setItem('accessToken', result.token);
        this.username = '';
        this.password = '';
        this.router.navigate(['/myitems']);
      }
    }, 
    (result) => {
      this.errorMessage = result.error.errors.map(e => e.msg).toString();
    }
    );
  }

  clearAlert() {
    this.errorMessage = '';
  }

}
