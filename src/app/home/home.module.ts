import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './cards/card/card.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClinicsComponent } from './clinics/clinics.component';
import { DoctorsListComponent } from './clinics/doctors-list/doctors-list.component';

const routes: Routes = [
  {
    path: '', 
    children:[
      {
        path: '', component: ClinicsComponent
      },
      {
        path : 'clinic/:name', component: DoctorsListComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    CardsComponent,
    CardComponent,
    ClinicsComponent,
    DoctorsListComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
