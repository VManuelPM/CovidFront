import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  user: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUser();
  }

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
