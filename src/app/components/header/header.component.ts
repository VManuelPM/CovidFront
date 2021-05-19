import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import * as menu from "../../shared/menu/menu.json";
import { menuOption } from "../../models/menu-option";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  user: any;
  menuOptions: menuOption[];

  constructor(private userService: UserService) {}

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
