import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PincodeService } from '../pincode.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data:any;
  item:any;
  itemid!:number;

  constructor(private pincodeservice:PincodeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.Printdata();
    this.route.params.subscribe((params) => {
      this.itemid=params['id'];
    });

  }
  Printdata(){
    this.pincodeservice.getBranchUsingPin().subscribe({
      next:response => {
        console.log(response);
        this.data=response;
        console.log(this.data);
      },
    });
  }

}
  // this.route.params.subscribe((params:Params)=> {
  //   if (params['id']){
  //     this.item=this.detailsservice.get(params['id']);
  //     this.itemid=params['id'];

  //   }
  // })
