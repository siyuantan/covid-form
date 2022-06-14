import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewRecordsPageComponent } from './admin/view-records-page/view-records-page.component';
import { SuccessPageComponent } from './form/success-page/success-page.component';
import { FormPageComponent } from './form/form-page/form-page.component';

const routes: Routes = [
  { path: '', component: FormPageComponent },
  { path: 'view-all', component: ViewRecordsPageComponent },
  { path: 'done', component: SuccessPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
