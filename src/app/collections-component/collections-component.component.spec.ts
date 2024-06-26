import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsComponentComponent } from './collections-component.component';

describe('CollectionsComponentComponent', () => {
  let component: CollectionsComponentComponent;
  let fixture: ComponentFixture<CollectionsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollectionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
