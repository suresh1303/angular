import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { nameChecker } from 'src/shared/name.validator';
import { emailChecker } from 'src/shared/email.validators';


@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  get formname() {
    return this.reactiveForm.get('name');
  }

  reactiveForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(6),nameChecker(/^admin$/)]],
    email: [''],
    confEmail: [''],
    gender: [''],
    status: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalcode: ['']
    })
  },{validator: emailChecker})

  ngOnInit(): void {
  }

}
