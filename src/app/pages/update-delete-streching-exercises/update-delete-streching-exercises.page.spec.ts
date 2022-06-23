import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateDeleteStrechingExercisesPage } from './update-delete-streching-exercises.page';

describe('UpdateDeleteStrechingExercisesPage', () => {
  let component: UpdateDeleteStrechingExercisesPage;
  let fixture: ComponentFixture<UpdateDeleteStrechingExercisesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDeleteStrechingExercisesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateDeleteStrechingExercisesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
