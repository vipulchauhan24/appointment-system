import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data !: {id:number, name:string,speciality:string,image:string,doctors:any,available : any};
  @Input() doctors : boolean = false; 
  @Input() clinics : boolean = false; 
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  // [routerLink]="'clinic/'+data['name']"
  loadDoctors(){
    sessionStorage.setItem('doctorsList', JSON.stringify(this.data.doctors));
    this.router.navigate(['clinic/'+this.data['name']]);
    sessionStorage.setItem('clinicID', `${this.data['id']}`)
  }
  loadDoctorDetails(){
    sessionStorage.setItem('doctorDetails', JSON.stringify(
      {
        name:this.data.name,
        speciality:this.data.speciality,
        available:this.data.available,
        image:this.data.image
      }
      ));
    sessionStorage.setItem('docID', `${this.data['id']}`)
    this.router.navigate([this.data['id']+'/appointment'])
  }
}
