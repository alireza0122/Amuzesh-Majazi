import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagementBanner } from './management-banner';

describe('ManagementBanner', () => {
  let component: ManagementBanner;
  let fixture: ComponentFixture<ManagementBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementBanner],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagementBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
