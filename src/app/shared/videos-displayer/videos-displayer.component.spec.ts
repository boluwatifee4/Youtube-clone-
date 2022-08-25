import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosDisplayerComponent } from './videos-displayer.component';

describe('VideosDisplayerComponent', () => {
  let component: VideosDisplayerComponent;
  let fixture: ComponentFixture<VideosDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosDisplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
