import { Component, OnInit } from '@angular/core';
import { Userform } from './userform';
import { SubmitformService } from '../submitform.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private _submitForm:SubmitformService) { }

  courses = ['male', 'female'];
  userModel = new Userform('Suresh', 9840012345, 'suresh@gmail.com', 'male', 'active', true);

  ngOnInit(): void {
  }

  checkNumber(num: any) {
    return (parseInt(num) < 9000000000 && num.length == 10) ? true : false;
  }

  onSubmit() {
    this._submitForm.enroll(this.userModel).subscribe(
      data => console.log('Success !',data),
      error => console.log('Error',error)
    );
  }

}
