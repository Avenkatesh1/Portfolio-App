import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilsComponent } from './skils.component';

describe('SkilsComponent', () => {
  let component: SkilsComponent;
  let fixture: ComponentFixture<SkilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkilsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
