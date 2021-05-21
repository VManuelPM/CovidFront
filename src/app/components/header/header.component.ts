import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import * as menu from "../../shared/menu/menu.json";
import { menuOption } from "../../models/menu-option";
import { Router } from "@angular/router";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  user: any;
  menuOptions: menuOption[];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUser();
    this.menuOptions = menu.options;
  }

  /**
   * Action of burger button
   */
  menuShow() {
    console.log("clic");
    let menu = document.querySelector("#sidemenu");
    menu.classList.toggle("menu-expanded");
    menu.classList.toggle("menu-collapsed");
    document.querySelector("body").classList.toggle("body-expanded");
  }

  logout() {
    let token = sessionStorage.getItem("token");
    if (token) {
      sessionStorage.removeItem("token");
    }
  }

  /**
   * Get User when login
   */
  async getUser() {
    let token = sessionStorage.getItem("token");
    if (token) {
      await this.userService.getUser(token).subscribe((res) => {
        this.user = res.email;
      });
    }
  }
}
