import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigabyteComponent } from './gigabyte.component';

describe('GigabyteComponent', () => {
  let component: GigabyteComponent;
  let fixture: ComponentFixture<GigabyteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GigabyteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GigabyteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
