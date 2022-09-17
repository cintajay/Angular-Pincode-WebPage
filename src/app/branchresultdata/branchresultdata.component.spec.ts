import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchresultdataComponent } from './branchresultdata.component';

describe('BranchresultdataComponent', () => {
  let component: BranchresultdataComponent;
  let fixture: ComponentFixture<BranchresultdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchresultdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchresultdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
