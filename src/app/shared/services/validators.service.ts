import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  public isNotValidField( form: FormGroup, field: string ): boolean | null {
    return form.controls[field].errors && form.controls[field].touched;
  }


  public cantBeStrider = ( control: FormControl ): ValidationErrors | null => {

    const value: string = control.value.trim().toLowerCase();

    if ( value === 'strider' ) {
      return {
        noStrider: true,
      }
    }

    return null;
  }
  //TODO
  isFieldEqual(firstField: string, SecondField:string){
    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      const fieldValue1 = formGroup.get(firstField)?.value;
      const fieldValue2 = formGroup.get(SecondField)?.value;

      if ( fieldValue1 !== fieldValue2 ) {
        formGroup.get(SecondField)?.setErrors({ notEqual: true });
        return { notEqual: true }
      }

      formGroup.get(SecondField)?.setErrors(null);
      return null;
    }
  }

}
