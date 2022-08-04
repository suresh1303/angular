import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public message: string = '';
  public inputval: string = '';
  public name = 'Christopher';
  message1 = 'a poem to remember';
  jsonval = ['Fiat', 'Ambassador', 'Maruti'];
  date = new Date();


}
