import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent {

  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required ],
    wantNotifications: [ true, Validators.required ],
    termsAndConditions: [ false, Validators.requiredTrue ],
  });

  constructor(
    private fb: FormBuilder,
    private validatorService:ValidatorsService,
   ) {}

  isNotValid(field: string): boolean | null{
    return this.validatorService.isNotValidField(this.myForm, field)
  }

  onSave() {
    if (this.myForm.invalid) {
       this.myForm.markAllAsTouched();
       return;
    }
  }

}
