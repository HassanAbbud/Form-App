import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidators from '../../../shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.pattern(customValidators.firstNameAndLastnamePattern)]],
    email: ["", [Validators.required, Validators.pattern(customValidators.emailPattern)]],
    username: ["", [Validators.required, customValidators.cantBeStrider]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    passwordConfirmation: ["", [Validators.required]],
  })

  constructor(private fb:FormBuilder){}

  isNotValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  onSubmit():void {
    if(!this.myForm.valid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value)
  }
}
