import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDimentionComponentComponent } from './two-dimention-component.component';

describe('TwoDimentionComponentComponent', () => {
  let component: TwoDimentionComponentComponent;
  let fixture: ComponentFixture<TwoDimentionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoDimentionComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwoDimentionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
