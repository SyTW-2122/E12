import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/_services/auth.service';
import { Ticket } from 'src/app/_models/ticket';

@Component({
  selector: 'app-film-sketch',
  templateUrl: './film-sketch.component.html',
  styleUrls: ['./film-sketch.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FilmSketchComponent implements OnInit {
  id: string = '';
  imagen_ruta: string = '';
  titulo: string = '';
  video_ruta: string = '';
  sinopsis: string = '';
  tituloN: string = '';
  public newTicket: Ticket;
  constructor(private authService: AuthService, private _route: ActivatedRoute) { 
    this.newTicket = new Ticket();
  }

  ngOnInit(): void {
    this._route.queryParams.subscribe(params => {
      this.id = params["id"]
    })
    this.authService.cartel().subscribe(
      res => {
        console.log(res)
        let carteleras = Object.values(res);
        let cartel_pelicula = '';

        carteleras.forEach((cartelPelicula) => {
          if (cartelPelicula._id == this.id) {
            this.titulo = this.titulo + '<div class="tituloPelicula">' + cartelPelicula.name + '</div>';
            this.titulo = this.titulo + '<div class="tituloLine"><hr class="linea" width="80%" size="2" color="#fff"/></div>';
            this.titulo = this.titulo + '<div class="salas">';
            this.titulo = this.titulo + '<div class="primeraSala"> <div class="nombreSala">SALA 4</div><div class="horasO"><div class="horas"><div class="hora">20:45</div><div class="hora">17:30</div><div class="hora">12:30</div><div class="hora">19:00</div><div class="hora">15:25</div><div class="hora">23:00</div></div></div></div><div class="segundaSala"><div class="nombreSala">SALA 6</div><div class="horasO"><div class="horas"><div class="hora">12:30</div><div class="hora">15:30</div><div class="hora">18:00</div><div class="hora">20:45</div><div class="hora">22:30</div><div class="hora">00:00</div></div></div></div></div>';
            this.imagen_ruta = '<img src ="' + cartelPelicula.image_route + '">';
            this.sinopsis = '<h4>Sinopsis</h4><p>' + cartelPelicula.synopsis + '</p>';
            this.tituloN = cartelPelicula.name;
          }
        })
      },
      err => console.log(err)
    )
  }



  postTicket(){
    this.newTicket.name = this.tituloN
    this.newTicket.sala = "SALA 4"
    this.newTicket.hora = "20:30"
    this.newTicket.dia = "20/03/2022"
    
    this.authService.reservar(this.newTicket)
      .subscribe(
        res => {
          console.log(res)
        },
        err => console.log(err)
      )
  }
}
