import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredDropdownComponent } from './filtered-dropdown.component';

describe('FilteredDropdownComponent', () => {
  let component: FilteredDropdownComponent;
  let fixture: ComponentFixture<FilteredDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilteredDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilteredDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
