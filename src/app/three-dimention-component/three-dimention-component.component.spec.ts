import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDimentionComponentComponent } from './three-dimention-component.component';

describe('ThreeDimentionComponentComponent', () => {
  let component: ThreeDimentionComponentComponent;
  let fixture: ComponentFixture<ThreeDimentionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeDimentionComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreeDimentionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
