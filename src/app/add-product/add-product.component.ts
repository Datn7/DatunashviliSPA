import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"],
})
export class AddProductComponent implements OnInit {
  registerForm: FormGroup;
  user: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  createRegisterForm() {
    this.registerForm = this.fb.group({
      gender: ["male"],
      username: ["", Validators.required],
      knownAs: ["", Validators.required],
      dateOfBirth: [null, Validators.required],
      city: ["", Validators.required],
      country: ["", Validators.required],
      password: [
        "",
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
      ],
      confirmPassword: ["", Validators.required],
    });
  }

  register() {
    console.log("registeringTemp");
  }
}
