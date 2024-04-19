import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Usuario } from './models/Usuario';
import { LoginComponent } from './componentes/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, LoginComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicios';
  edadUno:number = 0;
  edadDos:number = 0;
  resultado:number = 0;
  
  limpiar(){
    this.edadUno = 0;
    this.edadDos = 0;
  }

  calcularPromedio(){
    this.resultado = ((this.edadUno + this.edadDos) / 2);
  }


  
}
