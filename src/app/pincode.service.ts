import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Root } from './postoffice';

@Injectable({
  providedIn: 'root'
})
export class PincodeService {
  url="https://api.postalpincode.in";
  pin_url!:string;
  data!:any;

  branch_url!:string;


  constructor(private http:HttpClient) { }

  sendPin(pin:number){
    console.log(pin);
    this.pin_url=this.url+'/pincode/'+pin;
    console.log(this.pin_url);
  }
  getBranchUsingPin():Observable<Root>{
    this.data= this.http.get<Root>(this.pin_url);
    console.log(this.data); //observable data
    return this.data;
  }
  getData():Observable<Root>{
    return this.data;
  }
  sendBranch(branch:string){
    console.log(branch);
    this.branch_url=this.url+'/postoffice/'+branch;
    console.log(this.branch_url);
  }
  getPinUsingBranch():Observable<Root>{
    this.data= this.http.get<Root>(this.branch_url);
    return this.data;
  }
}
//this.data= this.http.get(this.url+'/'+pin);
