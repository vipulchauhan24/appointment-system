import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clinics : {} = [
    {
      id : 1,
      name: 'Dermacos',
      speciality : 'Dermatology',
      image: "https://images.unsplash.com/photo-1601458007492-20749caccf0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      doctors : [
        {
          id : 3,
          name : 'Dr. Inder Singh',
          speciality : 'Dermatology',
          image : "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          available : [
            {
              bookingid : 1,
              timing : '10:00 - 10:30',
              booked : false
            },
            {
              bookingid : 2,
              timing : '10:30 - 11:00',
              booked : false
            },
            {
              bookingid : 3,
              timing : '11:00 - 11:30',
              booked : false
            },
            {
              bookingid : 4,
              timing : '11:30 - 12:00',
              booked : false
            }
          ]
        }
      ]
    },
    {
      id : 2,
      name : 'Raj Clinic',
      speciality : 'Physician,Homopethic,Orthopedic',
      image : "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      doctors : [
        {
          id : 1,
            name: 'Dr. Saurav Raghav',
            speciality : 'Orthopedic',
            image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
            available : [
              {
                bookingid : 1,
                timing : '10:00 - 10:30',
                booked : false
              },
              {
                bookingid : 2,
                timing : '10:30 - 11:00',
                booked : false
              },
              {
                bookingid : 3,
                timing : '11:00 - 11:30',
                booked : false
              },
              {
                bookingid : 4,
                timing : '11:30 - 12:00',
                booked : false
              }
            ]
        },
        {
          id : 2,
          name : 'Dr. Sunita Devi',
          speciality : 'Physician',
          image : "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          available : [
            {
              bookingid : 1,
              timing : '10:00 - 10:30',
              booked : false
            },
            {
              bookingid : 2,
              timing : '10:30 - 11:00',
              booked : false
            },
            {
              bookingid : 3,
              timing : '11:00 - 11:30',
              booked : false
            },
            {
              bookingid : 4,
              timing : '11:30 - 12:00',
              booked : false
            }
          ]
        },
        {
          id : 4,
          name : 'Dr. Viresh Kumar',
          speciality : 'Homopethic',
          image : "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          available : [
            {
              bookingid : 1,
              timing : '10:00 - 10:30',
              booked : false
            },
            {
              bookingid : 2,
              timing : '10:30 - 11:00',
              booked : false
            },
            {
              bookingid : 3,
              timing : '11:00 - 11:30',
              booked : false
            },
            {
              bookingid : 4,
              timing : '11:30 - 12:00',
              booked : false
            }
          ]
        }
      ]
    },
    {
      id : 3,
      name : 'Lal eye hospital',
      speciality : 'Eye specialist',
      image : "https://images.unsplash.com/photo-1486250944723-86bca2b15b06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      doctors : [
        {
          id : 5,
          name : 'Dr. Vipul Chauhan',
          speciality : 'Eye specialist',
          image : "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRvY3RvcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          available : [
            {
              bookingid : 1,
              timing : '10:00 - 10:30',
              booked : false
            },
            {
              bookingid : 2,
              timing : '10:30 - 11:00',
              booked : false
            },
            {
              bookingid : 3,
              timing : '11:00 - 11:30',
              booked : false
            },
            {
              bookingid : 4,
              timing : '11:30 - 12:00',
              booked : false
            }
          ]
        }
      ]
    }
  ]
  constructor(){
    if(!sessionStorage.getItem('clinics')){
      sessionStorage.setItem('clinics', JSON.stringify(this.clinics))
    }
  }
}
