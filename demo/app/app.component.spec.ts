import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });
    component = TestBed.createComponent(AppComponent).componentInstance;
  });

  it ('should work', () => {
    expect(component instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});
