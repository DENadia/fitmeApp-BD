import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusclesGroupForRoutinePage } from './muscles-group-for-routine.page';

describe('MusclesGroupForRoutinePage', () => {
  let component: MusclesGroupForRoutinePage;
  let fixture: ComponentFixture<MusclesGroupForRoutinePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MusclesGroupForRoutinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusclesGroupForRoutinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
