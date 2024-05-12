import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsComponentComponent } from './schools-component.component';

describe('SchoolsComponentComponent', () => {
  let component: SchoolsComponentComponent;
  let fixture: ComponentFixture<SchoolsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
