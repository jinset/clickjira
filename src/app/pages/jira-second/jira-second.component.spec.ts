import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraSecondComponent } from './jira-second.component';

describe('JiraSecondComponent', () => {
  let component: JiraSecondComponent;
  let fixture: ComponentFixture<JiraSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JiraSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
