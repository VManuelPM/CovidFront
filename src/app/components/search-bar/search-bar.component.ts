import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private dataService: DataService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.createFormGroup();
  }

  /**
   * Validate Form
   */
  get getControl() {
    return this.searchForm.controls;
  }

  createFormGroup() {
    return this.fb.group({
      field: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      option: new FormControl("", [Validators.required]),
    });
  }

  search() {
    console.log(this.searchForm.value.field);
    console.log(this.searchForm.value.option);
  }
}
