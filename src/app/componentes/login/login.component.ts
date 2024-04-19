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
  user2:Usuario = new Usuario("a","a");
  ngOnInit(): void {
    
    const userString = localStorage.getItem("usuario");
    const user:Usuario = JSON.parse(userString!);
    this.user2.clave = user.clave;
    this.user2.nombre = user.nombre;
  }
  
  bandera:boolean = false;
  login:boolean = false;



  constructor(private router: Router) {

  }

  goTo(path: string) {
    this.router.navigate([path]);
  }

  verificar(){
    this.login = true;
    this.bandera = false;
    
    if(this.user2.clave == this.clave && this.user2.nombre == this.nombre){
      this.bandera = true;
    }
  }
}
