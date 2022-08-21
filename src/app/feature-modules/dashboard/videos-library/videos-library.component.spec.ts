import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosLibraryComponent } from './videos-library.component';

describe('VideosLibraryComponent', () => {
  let component: VideosLibraryComponent;
  let fixture: ComponentFixture<VideosLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
