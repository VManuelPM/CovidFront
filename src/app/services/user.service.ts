import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    let loginObject = {
      email: email,
      password: password,
    };
    return this.http.post<any>(`${this.baseUrl}/user/login`, loginObject);
  }

  getUser(token: string) {
    let userToken = {
      user: token,
    };
    return this.http.post<any>(`${this.baseUrl}/user/getUser`, userToken);
  }

  isLogged() {
    if (sessionStorage.getItem("token")) {
      return true;
    }
  }
}
