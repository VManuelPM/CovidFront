import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  menuShow() {
    console.log("clic");
    let menu = document.querySelector("#sidemenu");
    menu.classList.toggle("menu-expanded");
    menu.classList.toggle("menu-collapsed");
    document.querySelector("body").classList.toggle("body-expanded");
  }
}
