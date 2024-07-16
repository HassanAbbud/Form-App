import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';
//import * as customValidators from '../../../shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
    email: ["", [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    username: ["", [Validators.required, this.validatorService.cantBeStrider]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    passwordConfirmation: ["", [Validators.required]],
  })

  constructor(
    private fb:FormBuilder,
    private validatorService: ValidatorsService,
  ){}

  isNotValidField( field: string ) {
   this.validatorService.isNotValidField(this.myForm, field)
  }

  onSubmit():void {
    if(!this.myForm.valid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value)
  }
}
