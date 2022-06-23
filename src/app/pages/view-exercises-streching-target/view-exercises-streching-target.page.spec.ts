import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewExercisesStrechingTargetPage } from './view-exercises-streching-target.page';

describe('ViewExercisesStrechingTargetPage', () => {
  let component: ViewExercisesStrechingTargetPage;
  let fixture: ComponentFixture<ViewExercisesStrechingTargetPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewExercisesStrechingTargetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewExercisesStrechingTargetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
