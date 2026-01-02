import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingText } from './typing-text';

describe('TypingText', () => {
  let component: TypingText;
  let fixture: ComponentFixture<TypingText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypingText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypingText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
