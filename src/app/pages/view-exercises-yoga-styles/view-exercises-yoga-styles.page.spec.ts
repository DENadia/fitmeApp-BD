import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewExercisesYogaStylesPage } from './view-exercises-yoga-styles.page';

describe('ViewExercisesYogaStylesPage', () => {
  let component: ViewExercisesYogaStylesPage;
  let fixture: ComponentFixture<ViewExercisesYogaStylesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewExercisesYogaStylesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewExercisesYogaStylesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
