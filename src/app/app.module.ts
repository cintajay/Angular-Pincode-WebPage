import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchPageComponent } from './search-page/search-page.component'
import { FormsModule } from '@angular/forms';
import { ResultdataComponent } from './resultdata/resultdata.component';
import { DetailsComponent } from './details/details.component';
import { BranchresultdataComponent } from './branchresultdata/branchresultdata.component';
import { BranchdetailsComponent } from './branchdetails/branchdetails.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    ResultdataComponent,
    DetailsComponent,
    BranchresultdataComponent,
    BranchdetailsComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
