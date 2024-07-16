import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';


const rtx5090 ={
  name: "RTX 5090",
  price: 2600,
  inStock: 6,
}
@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit{

  public myForm:FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.min(0)]],
    inStock: [0, [Validators.min(0)]],
  })

  constructor(
    private fb:FormBuilder,
    private validatorService:ValidatorsService,
  ){}

  ngOnInit(): void {
    this.myForm.reset(rtx5090)
  }

  isNotValidField( field: string ): boolean | null {
    return this.validatorService.isNotValidField(this.myForm, field)
  }

  getFieldError( field: string ): string | null {

    if ( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors) ) {
      switch( key ) {
        case 'required':
          return 'This field is required';

        case 'minlength':
          return `There must be at least ${ errors['minlength'].requiredLength } characters.`;

        case 'min':
          return `Value must be greater than ${ errors['min'].min }.`;
      }
    }

    return null;
  }

  onSave():void {
    if(!this.myForm.valid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value)
  }
}
