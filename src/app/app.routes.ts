import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';

export const routes: Routes = [
    {path: '', redirectTo: "/home", pathMatch: 'full'},
    {path: 'home', component: LoginComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'bienvenido', component: BienvenidoComponent},
];
// {path: 'nuevaRuta', component: LoginComponent}