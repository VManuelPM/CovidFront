import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
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

  register() {
    /*console.log(this.loginForm);*/
    this.userService
      .register(
        this.loginForm.value.name,
        this.loginForm.value.email,
        this.loginForm.value.password
      )
      .subscribe(
        (res) => {
          this.router.navigate(["/login"]);
          Swal.fire({
            backdrop: false,
            title: "Success!",
            text: "User Register successfully",
            icon: "success",
          });
        },
        (err) => {
          console.log(err);
          Swal.fire({
            backdrop: false,
            title: "Error!",
            text: "User already exists",
            icon: "error",
          });
        }
      );
  }

  createFormGroup() {
    return this.fb.group({
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
}
