import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PincodeService } from '../pincode.service';

@Component({
  selector: 'app-branchdetails',
  templateUrl: './branchdetails.component.html',
  styleUrls: ['./branchdetails.component.css']
})
export class BranchdetailsComponent implements OnInit {
  data:any;
  itemid!:number;

  constructor(private pincodeservice:PincodeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.Printdata();
    this.route.params.subscribe((params) => {
      this.itemid=params['id'];
    });
  }
  Printdata(){
    this.pincodeservice.getPinUsingBranch().subscribe({
      next:response => {
        console.log(response);
        this.data=response;
        console.log(this.data);
      },
    });
  }

}
