import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``
})
export class DynamicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ["Metal gear", [Validators.required]],
      ["Death stranding", [Validators.required]],
    ])
  })

  get favoriteGames (){
    return this.myForm.controls['favoriteGames'] as FormArray;
    //return this.myForm.get("favoriteGames") as FormArray;
    //return my
  }

  constructor(private fb: FormBuilder){}

  isNotValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  isNotValidFieldInArray( formArray: FormArray, index: number ): boolean | null {
    return formArray.controls[index].errors
      && formArray.controls[index].touched;
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

  onSubmit(){
    if(!this.myForm.valid) {
      this.myForm.markAllAsTouched();
      return;
    };
  }

  onDeleteFavorite(index: number){
    this.favoriteGames.removeAt(index);
  }
}
