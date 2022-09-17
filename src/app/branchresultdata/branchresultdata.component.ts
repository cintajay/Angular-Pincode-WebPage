import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PincodeService } from '../pincode.service';

@Component({
  selector: 'app-branchresultdata',
  templateUrl: './branchresultdata.component.html',
  styleUrls: ['./branchresultdata.component.css']
})
export class BranchresultdataComponent implements OnInit {
  data:any;

  constructor(private pincodeservice:PincodeService, private router:Router) { }
  errorFlag!:string;

  ngOnInit(): void {
    this.Printdata();
  }
  Printdata(){
    this.pincodeservice.getPinUsingBranch().subscribe({
      next:response => {
        console.log(response);
        this.data=response;
        console.log(this.data);
        if(this.data['0'].Status=='Error'){
          this.errorFlag="Error"
          console.log("Branch Name doesn't exist")
          this.router.navigateByUrl('/errorpage');
        }
        else{
          this.errorFlag="Success"
        }
      },
    });
  }

}
