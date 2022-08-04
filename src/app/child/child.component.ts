import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() public name:string ='';
  @Output() public mydata= new EventEmitter();

  fireEvent() {
    this.mydata.emit("Message from Child Component");
  }

}
