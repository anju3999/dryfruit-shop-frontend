import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftBoxDetailsComponent } from './gift-box-details.component';

describe('GiftBoxDetailsComponent', () => {
  let component: GiftBoxDetailsComponent;
  let fixture: ComponentFixture<GiftBoxDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftBoxDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GiftBoxDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
