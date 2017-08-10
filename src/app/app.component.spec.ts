import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { MODULE_DEF } from './module-def';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule(MODULE_DEF).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
