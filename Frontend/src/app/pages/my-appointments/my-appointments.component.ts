import { Component, OnInit } from '@angular/core';
import { LoginResponse } from 'src/app/model/LoginResponse';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { MedicalCenterService } from 'src/app/service/medicalCenter.service';
import { UserService } from 'src/app/service/user.service';
import { AppointmentDTO } from 'src/app/systemadmin-utils/AppointmentDTO';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.css'],
})
export class MyAppointmentsComponent implements OnInit {
  public myAppointments: AppointmentDTO[] = [];
  activeUser: LoginResponse = new LoginResponse();

  constructor(
    private authenticationService: AuthenticationService,
    public userService: UserService,
    public medicalCenterService: MedicalCenterService
  ) {}

  ngOnInit(): void {
    this.activeUser = this.authenticationService.getCurrentUser();
    this.userService
      .getAppointmentsByUser(this.activeUser.personalId)
      .subscribe((appointments: any) => {
        console.log(appointments);
        this.myAppointments = appointments;
        console.log('Moji');
        console.log(this.myAppointments);
      });
  }

  cancelAppointment(appointmentDTO: AppointmentDTO) {
    this.userService
      .cancelAppointment(
        appointmentDTO
      )
      .subscribe((appointment: any) => {
        console.log(appointment);
        if (
          appointment.response ==
          "Something wrong happened..."
        ) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: "Something wrong happened...",
            background: '#1e2126',
            color: '#c4c4c4',
            showCancelButton: false,
            showConfirmButton: false,
            timer: 2000,
          });
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Yippee!',
            text: 'Successfully cancelled appointment',
            background: '#1e2126',
            color: '#c4c4c4',
            showCancelButton: false,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  }


}
