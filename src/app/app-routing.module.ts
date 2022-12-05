import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppPaths } from './shared/enums/app-paths.enum';

const routes: Routes = [
  { path: AppPaths.Procom, loadChildren: () => import('./procom/procom.module').then((m) => m.ProcomModule) },
  {
    path: '**',
    redirectTo: AppPaths.Procom,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
