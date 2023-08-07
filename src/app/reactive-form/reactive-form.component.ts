import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userForm!: FormGroup;
  submitted = false; // To track form submission

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onFormSubmit(): void {
    this.submitted = true; // Mark the form as submitted
    
    if (this.userForm.valid) {
      // Process the form data here, e.g., send it to a server.
      console.log(this.userForm.value);
    }
  }
}
