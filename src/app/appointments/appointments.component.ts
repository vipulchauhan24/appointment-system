import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  details !: {available : any,name:string,speciality:string,image:string};
  constructor( private router : Router) {
  }

  ngOnInit(): void {
    this.loadDetails()
  }

  loadDetails(){
    if(sessionStorage.getItem('doctorDetails')){
      this.details = JSON.parse(`${sessionStorage.getItem('doctorDetails')}`)
    }
  }
  clinics !: any;
  updateInfo(bookingID : number){
    if(sessionStorage.getItem('clinicID') && sessionStorage.getItem('docID')){
      const clinicID = parseInt(`${sessionStorage.getItem('clinicID')}`)
      const docID = parseInt(`${sessionStorage.getItem('docID')}`)
      console.log(clinicID,docID,bookingID)
      // this.clinics      
      for(let clinic of this.clinics){
        if(clinic.id === clinicID){
          for(let doc of clinic.doctors){
            if(doc.id === docID){
              for(let appointment of doc.available){
                if(appointment.bookingid === bookingID){
                  appointment.booked = true;
                  break;
                }
              }
            }
          }
        }
      }
      sessionStorage.setItem('clinics', JSON.stringify(this.clinics))
      this.router.navigate([''])
    }
  }
  bookAppointment(id : number, available : boolean){
    if(sessionStorage.getItem('clinics') && available){
      this.clinics = JSON.parse(`${sessionStorage.getItem('clinics')}`)
      this.updateInfo(id)
    }
  }

}
