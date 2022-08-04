import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {

  public empData: any;
  public message = '';

  constructor(private _employees: EmpserviceService, private _route: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.empData = this._employees.getEmployees();
    this._employees.getEmployees().subscribe(data => this.empData = data);
  }

 handleClick(id:number) {
  this._route.navigate(['/empdetails',id]);
  //this._route.navigate([id],{relativeTo: this.route});
  //alert(id);
 }

}
