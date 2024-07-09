import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MichaelJacksonComponent } from './michael-jackson.component';

describe('MichaelJacksonComponent', () => {
  let component: MichaelJacksonComponent;
  let fixture: ComponentFixture<MichaelJacksonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MichaelJacksonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MichaelJacksonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
