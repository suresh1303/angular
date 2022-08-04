import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {

  public myid = '';
  public empData: any;

  constructor(private _employees: EmpserviceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id') + '';
    this.myid = id;
    this._employees.getEmployees().subscribe(data => this.empData = data);
  }

  showDept1() {
    this.router.navigate(['dept1'], { relativeTo: this.route })
  }

  showDept2() {
    this.router.navigate(['dept2'], { relativeTo: this.route })
  }

}
