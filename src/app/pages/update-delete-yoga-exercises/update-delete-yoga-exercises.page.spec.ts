import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateDeleteYogaExercisesPage } from './update-delete-yoga-exercises.page';

describe('UpdateDeleteYogaExercisesPage', () => {
  let component: UpdateDeleteYogaExercisesPage;
  let fixture: ComponentFixture<UpdateDeleteYogaExercisesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDeleteYogaExercisesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateDeleteYogaExercisesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
