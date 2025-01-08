import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormArray,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      bands: this.formBuilder.array([
        // Initialize with one band control
        this.createBandFormControl()
      ])
    });
  }

  // Creates a FormControl for a band ID (required, max 4 chars)
  private createBandFormControl(): FormControl {
    return this.formBuilder.control('', [
      Validators.required,
      Validators.maxLength(4)
    ]);
  }

  // Expose the 'bands' FormArray
  get bandsArray(): FormArray {
    return this.userForm.get('bands') as FormArray;
  }

  // Add a new band control
  addBand(): void {
    this.bandsArray.push(this.createBandFormControl());
  }

  // Optionally remove a band by index
  removeBand(index: number): void {
    this.bandsArray.removeAt(index);
  }

  // Example toggling the 'required' validator on the `name` control
  toggleValidation(): void {
    const nameControl = this.userForm.get('name');
    if (!nameControl) return;

    if (nameControl.hasValidator(Validators.required)) {
      nameControl.removeValidators(Validators.required);
    } else {
      nameControl.addValidators(Validators.required);
    }
    nameControl.updateValueAndValidity();
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const { name, email, bands } = this.userForm.value;
      // Build the final object
      const submission = {
        name,
        email,
        bands  // array of strings
      };
      console.log('Form submitted:', submission);
      // Do something with `submission` (e.g., send to a server)
    }
  }
}
