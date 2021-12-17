import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent implements OnInit {

  doctors : {} = []
  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem('doctorsList')){
      this.doctors = JSON.parse(`${sessionStorage.getItem('doctorsList')}`)
    }
  }
}
