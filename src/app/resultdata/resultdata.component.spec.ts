import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultdataComponent } from './resultdata.component';

describe('ResultdataComponent', () => {
  let component: ResultdataComponent;
  let fixture: ComponentFixture<ResultdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
