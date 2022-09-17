import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PincodeService } from '../pincode.service';
import {  Root } from '../postoffice';


@Component({
  selector: 'app-resultdata',
  templateUrl: './resultdata.component.html',
  styleUrls: ['./resultdata.component.css']
})
export class ResultdataComponent implements OnInit {
  // data:Root[]=[];
  // data: Root[]= new Array<Root>();
  data:any;
  errorFlag!:string;

  constructor(private pincodeservice:PincodeService, private router:Router) { }

  ngOnInit(): void {
    this.Printdata();
  }
  Printdata(){
    this.pincodeservice.getBranchUsingPin().subscribe({
      next:response => {
        console.log(response);
        this.data=response;
        console.log(this.data);
        if(this.data['0'].Status=='Error'){
          this.errorFlag="Error"
          console.log("Pincode doesn't exist")
          this.router.navigateByUrl('/errorpage');
        }
        else{
          this.errorFlag="Success"
        }
      }

    });
    console.log(this.data); //gives undefined

  }
}

 // (d:any) =>console.log(d))
 //console.log(this.data);

//   // getHeroes(): void {
//   this.heroService.getHeroes()
//   .subscribe(heroes => this.heroes = heroes);
// }

// {
//   this.pincodeservice.getBranchdata().subscribe({
//     next:response => {
//       console.log(response);
//       this.data=response;
//       console.log(this.data);
//     },
//   });
//}
