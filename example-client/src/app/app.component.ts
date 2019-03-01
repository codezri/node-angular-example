import { Component } from '@angular/core';
import { LoginService } from './services/auth/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Simple App';

  constructor(private loginService: LoginService, private router: Router){}


  logout(){
    this.loginService.logoutUser();
    this.router.navigate(['/login']);
  }
}
