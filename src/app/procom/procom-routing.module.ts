import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProcomPaths } from './enums/procom-paths.enum';
import { ProcomComponent } from './procom.component';

const routes: Routes = [
  { path: ProcomPaths.Home, component: ProcomComponent },
  {
    path: '**',
    redirectTo: ProcomPaths.Home,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcomRoutingModule {}
