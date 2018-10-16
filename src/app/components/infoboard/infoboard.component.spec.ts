import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoboardComponent } from './infoboard.component';

describe('InfoboardComponent', () => {
  let component: InfoboardComponent;
  let fixture: ComponentFixture<InfoboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
