import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateDeleteOutdoorsActivityPage } from './update-delete-outdoors-activity.page';

describe('UpdateDeleteOutdoorsActivityPage', () => {
  let component: UpdateDeleteOutdoorsActivityPage;
  let fixture: ComponentFixture<UpdateDeleteOutdoorsActivityPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDeleteOutdoorsActivityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateDeleteOutdoorsActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
