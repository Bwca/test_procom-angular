import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ProcomRoutingModule } from './procom-routing.module';
import { ProcomComponent } from './procom.component';

@NgModule({
  declarations: [ProcomComponent],
  imports: [CommonModule, ProcomRoutingModule, MatSlideToggleModule],
})
export class ProcomModule {}
