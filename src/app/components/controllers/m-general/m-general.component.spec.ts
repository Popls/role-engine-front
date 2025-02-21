import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MGeneralComponent } from './m-general.component';

describe('MGeneralComponent', () => {
  let component: MGeneralComponent;
  let fixture: ComponentFixture<MGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MGeneralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
