 import { Component } from '@angular/core';
  import { RouterOutlet } from '@angular/router';

  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',  // ✅ Correcto
    styleUrls: ['./app.component.css']    // ✅ Correcto
  })
  export class AppComponent {
    title = 'Aeropuerto App';
  }

  /* Conceptos importantes:
  - @Component → Es un decorador que convierte la clase en un componente Angular
  - selector → Es como llamaremos este componente en HTML (<app-root>)
  - standalone: true → Angular moderno (no necesita módulos)
  - imports → Qué otros componentes/módulos necesita este componente */
