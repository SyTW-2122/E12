import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  user: any = '';
  loading: boolean = false;
  titulo: string = '';
  sala: string = '';
  hora: string = '';
  dia: string = '';
  ticketFinal: string = '';
  username: string = 'alu0101244440';
  email: string = 'alu0101244440@ull.edu.es';
  constructor(private authService: AuthService) {
  }
    

  ngOnInit(): void {
    this.authService.tickets().subscribe(
      res => {
        // console.log(res)
        let ticketsC = Object.values(res);
        let ticket = '';
        // console.log(ticketsC)
        ticket = ticket + '<h2>MIS TICKETS</h2>';
        ticket = ticket + '<hr class="linea" width="70%" size="2" color="#fff"/>';
        
        ticketsC.forEach((ticketN) => {
            ticket = ticket + '<div class="reserva">';
            ticket = ticket + '<div class="maincontent">';
            ticket = ticket + '<div class="nombrePelicula">' + ticketN.name + '</div>';
            ticket = ticket + '<div class="salaYhora">'+ ticketN.sala + ticketN.hora + '</div>';
            ticket = ticket + '<div class="diaPelicula">' + ticketN.dia + '</div>';
            ticket = ticket + '</div>';
            ticket = ticket + '<div class="cancelarReserva">';
            ticket = ticket + '<button type="submit" (click)="deleteTicket('+ ticketN.name +')">Cancelar</button>'
            ticket = ticket + '</div>'
            ticket = ticket + '</div>';
        })
       
        this.ticketFinal = ticket;
      },
      err => console.log(err)
    )
  }

  deleteTicket(name) {
    console.log("name")
    this.authService.deleteTickets(name)
      .subscribe(
        res => {
          console.log(res)
        },
        err => console.log(err)
      )
  }

  logout() {
    this.authService.logout()
  }
}