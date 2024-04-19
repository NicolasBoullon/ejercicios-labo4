import { Component, OnInit } from '@angular/core';
import { Usuario} from '../../models/Usuario';
import { FormsModule } from '@angular/forms';
import { BienvenidoComponent } from '../bienvenido/bienvenido.component';
import { ErrorComponent } from '../error/error.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, BienvenidoComponent, ErrorComponent, RouterLink, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  nombre:string = "";
  clave:string = "";

  nuevoUser:Usuario = new Usuario("Nico","Pass");
  
  bandera:boolean = false;
  login:boolean = false;

  ngOnInit(): void {
    localStorage.setItem("usuario",JSON.stringify(this.nuevoUser));
  }

  constructor(private router: Router) {

  }

  goTo(path: string) {
    this.router.navigate([path]);
  }

  verificar(){
    this.login = true;
    this.bandera = false;
    
    if(this.nuevoUser.clave == this.clave && this.nuevoUser.nombre == this.nombre){
      this.bandera = true;
    }
  }
}
