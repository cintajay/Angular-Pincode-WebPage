import { Component, OnInit } from '@angular/core';
import { PincodeService } from '../pincode.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  pincode_var!:number;
  data!: any;

  branch_var!:string;

  constructor(private pincodeservice:PincodeService) { }

  ngOnInit(): void {
  }
  Submit(){
    console.log(this.pincode_var);
    this.pincodeservice.sendPin(this.pincode_var)
    }
  Submit2(){
    console.log(this.branch_var);
    this.pincodeservice.sendBranch(this.branch_var)
    }
  }




