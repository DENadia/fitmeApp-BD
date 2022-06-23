import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewActivitiesOutdoorsTypesPage } from './view-activities-outdoors-types.page';

describe('ViewActivitiesOutdoorsTypesPage', () => {
  let component: ViewActivitiesOutdoorsTypesPage;
  let fixture: ComponentFixture<ViewActivitiesOutdoorsTypesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivitiesOutdoorsTypesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewActivitiesOutdoorsTypesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
