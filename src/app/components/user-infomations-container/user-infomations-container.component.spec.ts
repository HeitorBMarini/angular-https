import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfomationsContainerComponent } from './user-infomations-container.component';

describe('UserInfomationsContainerComponent', () => {
  let component: UserInfomationsContainerComponent;
  let fixture: ComponentFixture<UserInfomationsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInfomationsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInfomationsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
