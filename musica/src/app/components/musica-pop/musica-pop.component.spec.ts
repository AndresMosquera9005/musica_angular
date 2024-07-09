import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicaPopComponent } from './musica-pop.component';

describe('MusicaPopComponent', () => {
  let component: MusicaPopComponent;
  let fixture: ComponentFixture<MusicaPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicaPopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicaPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
