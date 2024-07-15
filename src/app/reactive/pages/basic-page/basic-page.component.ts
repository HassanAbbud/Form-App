import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent {

  public myForm:FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.min(0)]],
    inStock: [0, [Validators.min(0)]],
  })

  constructor(private fb:FormBuilder){}

  onSave():void {

    console.log(this.myForm.value)
  }
}
