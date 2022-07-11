import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSearchComponent } from './rxjs-search.component';

describe('RxjsSearchComponent', () => {
  let component: RxjsSearchComponent;
  let fixture: ComponentFixture<RxjsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
