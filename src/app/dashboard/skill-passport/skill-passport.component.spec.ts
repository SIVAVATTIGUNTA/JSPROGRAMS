import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillPassportComponent } from './skill-passport.component';

describe('SkillPassportComponent', () => {
  let component: SkillPassportComponent;
  let fixture: ComponentFixture<SkillPassportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillPassportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
