import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowExampleComponent } from './row-example.component';

describe('RowExampleComponent', () => {
  let component: RowExampleComponent;
  let fixture: ComponentFixture<RowExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
