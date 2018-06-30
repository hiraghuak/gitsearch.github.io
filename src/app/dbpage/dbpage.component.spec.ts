import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbpageComponent } from './dbpage.component';

describe('DbpageComponent', () => {
  let component: DbpageComponent;
  let fixture: ComponentFixture<DbpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
