import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogupComponent } from './logup.component';

describe('LogupComponent', () => {
  let component: LogupComponent;
  let fixture: ComponentFixture<LogupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
