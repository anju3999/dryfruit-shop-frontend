import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DryFruitsListComponent } from './dry-fruits-list.component';

describe('DryFruitsListComponent', () => {
  let component: DryFruitsListComponent;
  let fixture: ComponentFixture<DryFruitsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DryFruitsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DryFruitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
