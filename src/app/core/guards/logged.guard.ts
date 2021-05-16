import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../../services/user.service";

@Injectable({
  providedIn: "root",
})
export class LoggedGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate() {
    // If the user is not logged in we'll send them back to the home page
    if (this.userService.isLogged()) {
      this.router.navigate(["/home"]);
      return false;
    }
    return true;
  }
}
