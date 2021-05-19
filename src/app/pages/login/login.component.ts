import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import Swal from "sweetalert2";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
  }

  get getControl() {
    return this.loginForm.controls;
  }

  login() {
    /* console.log(this.loginForm.value.email); */
    this.userService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        (res) => {
          console.log(res);
          if (!sessionStorage.getItem("token")) {
            sessionStorage.setItem("token", res.message);
            this.router.navigate(["/home"]);
          }
        },
        (err) => {
          console.log(err);
          Swal.fire({
            backdrop: false,
            title: "Error!",
            text: err.error.message,
            icon: "error",
          });
        }
      );
  }

  createFormGroup() {
    return this.fb.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
}
