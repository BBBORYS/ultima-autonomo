import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAsistenteComponent } from './edit-asistente.component';

describe('EditAsistenteComponent', () => {
  let component: EditAsistenteComponent;
  let fixture: ComponentFixture<EditAsistenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAsistenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAsistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
