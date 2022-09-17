import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchdetailsComponent } from './branchdetails/branchdetails.component';
import { BranchresultdataComponent } from './branchresultdata/branchresultdata.component';
import { DetailsComponent } from './details/details.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ResultdataComponent } from './resultdata/resultdata.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SearchPageComponent  },
  { path: 'data', component: ResultdataComponent  },
  { path: 'data/:id', component: DetailsComponent  },
  { path: 'data2', component: BranchresultdataComponent },
  { path: 'data2/:id', component: BranchdetailsComponent },
  { path: 'errorpage', component: ErrorpageComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
