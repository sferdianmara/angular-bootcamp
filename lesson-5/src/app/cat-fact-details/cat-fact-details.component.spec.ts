import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFactDetailsComponent } from './cat-fact-details.component';

describe('CatFactDetailsComponent', () => {
  let component: CatFactDetailsComponent;
  let fixture: ComponentFixture<CatFactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatFactDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatFactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
