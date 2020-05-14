import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCategoriasComponent } from './sidebar-categorias.component';

describe('SidebarCategoriasComponent', () => {
  let component: SidebarCategoriasComponent;
  let fixture: ComponentFixture<SidebarCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
