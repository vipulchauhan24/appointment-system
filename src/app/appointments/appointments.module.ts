import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsComponent } from './appointments.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '', 
    children:[
      {
        path: '', component: AppointmentsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppointmentsComponent
  ],
  imports: [
    FormsModule,
    NgbModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AppointmentsModule { }
