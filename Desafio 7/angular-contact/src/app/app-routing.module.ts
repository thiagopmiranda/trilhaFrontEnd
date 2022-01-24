import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';

const routes: Routes = [{ path: 'contactUs', component: ContactFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
