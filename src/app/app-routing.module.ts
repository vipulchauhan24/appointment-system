import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: ()=>import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: ':id/appointment', loadChildren: ()=>import('./appointments/appointments.module').then(m => m.AppointmentsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
