
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { Usertable2Component } from './usertable2.component';

describe('Usertable2Component', () => {
  let component: Usertable2Component;
  let fixture: ComponentFixture<Usertable2Component>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Usertable2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usertable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
