import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagarComponent } from './sagar.component';

describe('SagarComponent', () => {
  let component: SagarComponent;
  let fixture: ComponentFixture<SagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SagarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
