import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColExampleComponent } from './col-example.component';

describe('ColExampleComponent', () => {
  let component: ColExampleComponent;
  let fixture: ComponentFixture<ColExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
