import { Component } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.scss'
})
export class ContenidoComponent {
  
  mostrarLista= false;
  
  
 
  alumnos= [{nombre:'Valeria Suarez ', nota:7, estado: true},
            {nombre:'Yamil Rousseau ',nota:10, estado: true},
            {nombre:'Sasha Roez ', nota:6, estado: false},
            {nombre:'Zafiro Suseau ', nota:4, estado: false},]

            
  
}
