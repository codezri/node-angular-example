import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUser(username: String, password:String) {
    return this.http.post('http://localhost:5000/api/v1/login', {
      username : username,
      password  : password
    });
  }

  logoutUser() {
    localStorage.removeItem('accessToken');
  }

  isLoggedIn(): boolean {
    return !! localStorage.getItem('accessToken');
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }
}
