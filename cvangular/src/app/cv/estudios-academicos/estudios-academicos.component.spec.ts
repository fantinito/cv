import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosAcademicosComponent } from './estudios-academicos.component';

describe('EstudiosAcademicosComponent', () => {
  let component: EstudiosAcademicosComponent;
  let fixture: ComponentFixture<EstudiosAcademicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstudiosAcademicosComponent]
    });
    fixture = TestBed.createComponent(EstudiosAcademicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
