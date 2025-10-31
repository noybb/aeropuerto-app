import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";

  @Component({
    selector: 'app-root',  // El nombre del componente en HTML
    standalone: true,   // Componente independiente (nueva forma de Angular)
    imports: [RouterOutlet, Header],  // Importamos RouterOutlet para usar las rutas
    templateUrl: './app.component.html',  // Ruta al archivo HTML
    styleUrls: ['./app.component.css']    // Ruta al archivo CSS
  })
  export class AppComponent {
    title = 'Aeropuerto App';
  }

  /* Conceptos importantes:
  - @Component → Es un decorador que convierte la clase en un componente Angular
  - selector → Es como llamaremos este componente en HTML (<app-root>)
  - standalone: true → Angular moderno (no necesita módulos)
  - imports → Qué otros componentes/módulos necesita este componente */
