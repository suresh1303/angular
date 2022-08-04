import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor() { }

  reactiveForm = new FormGroup({
    name: new FormControl('Mark Antony'),
    email: new FormControl(''),
    gender: new FormControl('male'),
    status: new FormControl('active'),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalcode: new FormControl('')
    })
  })

  setValue(){
    this.reactiveForm.setValue({
      name: 'Suresh Sahadevan',
      email: 'suresh.sahadevan@gmail.com',
      gender: 'male',
      status: 'active',
      address: ({
        city: 'Chennai',
        state: 'Tamilnadu',
        postalcode: '600040'
      })
    })
  }

  patchValue(){
    this.reactiveForm.patchValue({
      name: 'Suresh Sahadevan',
      email: 'suresh.sahadevan@gmail.com',
      gender: 'male',
      status: 'active'
    })
  }

  ngOnInit(): void {
  }

}
