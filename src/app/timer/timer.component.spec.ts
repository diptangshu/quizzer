import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerComponent } from './timer.component';

import { MODULE_DEF } from '../module-def';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(MODULE_DEF).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('tick()', () => {
    it('should decrease timeLeft value by one second', () => {
      component.timeLeft = 10;
      expect(component.tick()).toBeTruthy();
      expect(component.timeLeft).toBe(9);
    });

    it('should decrease time if one second left', () => {
      component.timeLeft = 1;
      expect(component.tick()).toBeTruthy();
      expect(component.timeLeft).toBe(0);
    });

    it('should not decrease and return false if no time left', () => {
      component.timeLeft = 0;
      expect(component.tick()).toBeFalsy();
      expect(component.timeLeft).toBe(0);
    });
  });

  describe('computeIconState()', () => {
    it('should return valid string values', () => {
      component.duration = 10;
      let testingTimes = [0, 5, 10, -1, 11];
      for (let i = 0; i < testingTimes.length; i++) {
        component.timeLeft = testingTimes[i];
        let iconState = component.computeIconState();
        expect(component.iconStates.includes(iconState)).toBeTruthy();
      }
    });
  });
});
