import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.scss']
})
export class ClinicsComponent implements OnInit {
  clinics !: any;
  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem('clinics')){
      this.clinics = JSON.parse(`${sessionStorage.getItem('clinics')}`)
    }
  }
  
}
