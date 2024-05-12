import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolComponentComponent } from './school-component.component';

describe('SchoolComponentComponent', () => {
  let component: SchoolComponentComponent;
  let fixture: ComponentFixture<SchoolComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
