import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupName, Validators, FormArray } from '@angular/forms';
import { nameChecker } from 'src/shared/name.validator';
import { SubmitformService } from '../submitform.service';


@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
  styleUrls: ['./conditional.component.css']
})
export class ConditionalComponent implements OnInit {

  reactiveForm = new FormGroup({});
  constructor(private fb: FormBuilder, private _submitForm:SubmitformService) {  }

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      name: ['James', [Validators.required, Validators.maxLength(25), nameChecker(/^admin$/)]],
      email: ['Blunt123@gmail.com'],
      gender: ['male'],
      status: ['active'],
      subscribe: false,
      alternatePhone:this.fb.array([])
    })

    this.reactiveForm.get('subscribe')?.valueChanges.subscribe(
      checkedVal => {
        const email = this.reactiveForm.get('email');
        if (checkedVal) {
          email?.setValidators(nameChecker(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)); //email validation
        }
        else {
          email?.clearValidators();
        }
        email?.updateValueAndValidity();
      }
    )

  }
  get alternatePhone() {
    return this.reactiveForm.get('alternatePhone') as FormArray;
  }

  addPhone() {
    this.alternatePhone.push(this.fb.control(''));
  }

  get formname() {
    return this.reactiveForm.get('name');
  }

  get formemail() {
    return this.reactiveForm.get('email'); 
  }

  onSubmit() {
    console.log('JSON', this.reactiveForm.value)
    this._submitForm.enroll(this.reactiveForm.value).subscribe(
      //data => console.log('Success !',data),
      //error => console.log('Error',error)
    );
  }

}
