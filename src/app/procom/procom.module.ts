import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { FilteredDropdownComponent } from './components/filtered-dropdown/filtered-dropdown.component';
import { ProcomRoutingModule } from './procom-routing.module';
import { ProcomComponent } from './procom.component';

@NgModule({
  declarations: [ProcomComponent, FilteredDropdownComponent],
  imports: [CommonModule, ProcomRoutingModule, MatSlideToggleModule, ReactiveFormsModule],
})
export class ProcomModule {}
