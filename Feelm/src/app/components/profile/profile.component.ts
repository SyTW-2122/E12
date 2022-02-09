import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

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
  constructor(private authService: AuthService) { }
    ticketFinal: string = '';

  ngOnInit(): void {
    this.authService.tickets().subscribe(
      res => {
        console.log(res)
        let ticketsC = Object.values(res);
        let ticket = '';
        console.log(ticketsC)
        ticket = ticket + '<h2>MIS TICKETS</h2>';
        ticket = ticket + '<hr class="linea" width="70%" size="2" color="#fff"/>';
        
        ticketsC.forEach((ticketN) => {
            ticket = ticket + '<div class="reserva">';
            ticket = ticket + '<div class="maincontent">';
            ticket = ticket + '<div class="nombrePelicula">' + ticketN.name + '</div>';
            ticket = ticket + '<div class="salaYhora">'+ ticketN.sala + ': ' + ticketN.hora + '</div>';
            ticket = ticket + '<div class="diaPelicula">' + ticketN.dia + '</div>';
            ticket = ticket + '</div>';
            ticket = ticket + '<div class="cancelarReserva"><button type="submit">Cancelar</button></div>';
            ticket = ticket + '</div>';
        })
        console.log(ticket)
        this.ticketFinal = ticket;
      },
      err => console.log(err)
    )
  }

  logout() {
    this.authService.logout()
  }
}