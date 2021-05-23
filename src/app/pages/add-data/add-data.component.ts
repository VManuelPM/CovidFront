import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { DataService } from "../../services/data.service";
import { Data } from "../../models/data";
import Swal from "sweetalert2";

@Component({
  selector: "app-add-data",
  templateUrl: "./add-data.component.html",
  styleUrls: ["./add-data.component.scss"],
})
export class AddDataComponent implements OnInit {
  dataForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataForm = this.createFormGroup();
  }

  submit() {
    let dataobj = {
      country: this.dataForm.value.country,
      country_code: this.dataForm.value.countryCode,
      continent: this.dataForm.value.continent,
      population: this.dataForm.value.population,
      indicator: this.dataForm.value.indicator,
      weekly_count: this.dataForm.value.weeklyCount,
      rate_14_day: "25.1623542278903",
      cumulative_count: this.dataForm.value.cumulativeCount,
      source: this.dataForm.value.source,
    };
    let data: Data = dataobj;
    if (data) {
      this.dataService.addData(data).subscribe(
        (res) => {
          console.log(res);
          Swal.fire({
            backdrop: false,
            title: "Success!",
            text: "Added",
            icon: "success",
          });
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  createFormGroup() {
    return this.fb.group({
      country: new FormControl("", [Validators.required]),
      countryCode: new FormControl("", [Validators.required]),
      continent: new FormControl("", [Validators.required]),
      population: new FormControl("", [Validators.required]),
      indicator: new FormControl("", [Validators.required]),
      weeklyCount: new FormControl("", [Validators.required]),
      cumulativeCount: new FormControl("", [Validators.required]),
      source: new FormControl("", [Validators.required]),
    });
  }

  get getControl() {
    return this.dataForm.controls;
  }
}
