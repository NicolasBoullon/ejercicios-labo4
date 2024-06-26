import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit{
  title = 'Ejercicios';
  edadUno:number = 0;
  edadDos:number = 0;
  resultado:number = 0;
  nuevoUser:Usuario = new Usuario("Nico","Pass");
  ngOnInit(): void {
    localStorage.setItem("usuario",JSON.stringify(this.nuevoUser));
  }
  limpiar(){
    this.edadUno = 0;
    this.edadDos = 0;
    this.resultado = 0;
  }

  calcularPromedio(){
    this.resultado = ((this.edadUno + this.edadDos) / 2);
  }


  
}
