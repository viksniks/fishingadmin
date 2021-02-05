import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FishingPage } from './fishing.page';

describe('FishingPage', () => {
  let component: FishingPage;
  let fixture: ComponentFixture<FishingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FishingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
