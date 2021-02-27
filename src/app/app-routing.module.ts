import { DefaultComponent } from './theme/default/default.component';
import { PageErrorComponent } from './theme/page-error/page-error.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent
  },
  {
    path: '**',
    component: PageErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
