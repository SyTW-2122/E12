import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BillboardComponent implements OnInit {
  constructor(private authService: AuthService) { }

  carteles: string = '';
  ngOnInit(): void {
    this.authService.cartel().subscribe(
      res => {
        console.log(res)
        let carteleras = Object.values(res);
        let cartel_pelicula = '';

        carteleras.forEach((cartelPelicula) => {
          cartel_pelicula = cartel_pelicula + '<div class="pelicula_y_texto">';
          cartel_pelicula = cartel_pelicula + '<div class="imagenPelicula">';
          cartel_pelicula = cartel_pelicula + '<a href="http://localhost:4200/pelicula?id=' + cartelPelicula._id + '"><img src ="' + cartelPelicula.image_route + '"></a>';
          cartel_pelicula = cartel_pelicula + '</div>';
          cartel_pelicula = cartel_pelicula + '<div class="textoPelicula">' + cartelPelicula.name + '</div>';
          cartel_pelicula = cartel_pelicula + '</div>';
        })
        this.carteles = cartel_pelicula;
      },
      err => console.log(err)
    )
  }
}