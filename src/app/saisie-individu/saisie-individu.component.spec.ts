import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieIndividuComponent } from './saisie-individu.component';

describe('SaisieIndividuComponent', () => {
  let component: SaisieIndividuComponent;
  let fixture: ComponentFixture<SaisieIndividuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaisieIndividuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieIndividuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
