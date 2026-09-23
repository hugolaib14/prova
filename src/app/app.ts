import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte } from './interfaces/producte'; //PER PODER UTILITZAR LA INTERFICIE PRODUCTE HEM DE FER UN IMPORT

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-entorns-2627');
}
//OBJECTIU DE LA SESION 2: Ver la diferencia entre JS y TS ---> TS = JS  Tipus
//ELS TIPUS no canvien com funciona el codi, pero ens ajuden a detectar errors abans de que s'executi el codi.
//"undefined is not a function" ----> AIXO ES EL QUE VOLEM EVITAR!!!!!!!!!!!!!!!!!!!!!!


/*function saluda (nom) {
  return nom.toUpperCase();
}


*/


//Tipus BASICS
nom: string = 'Angular';
nom2: string = 'Laravel';
versio: number = 20;
actiu: boolean = true;

//ARRAYS TIPATS
colors: string[] = ['vermell', 'verd', 'blau'];
frameworks: string[] = [this.nom , this.nom2];
punts : number[] = [10, 15, 20];

ciutat: string = 'Lleida';
codiP: number = 25001; 

producte: Producte = {
  id: 1,
  nom: 'Camiseta', 
  preu: 20.99,
  disponible: true,
  descripcio: 'Camiseta de cotó'
}

arrayProductes: Producte[] = [
  {
    id: 1,
    nom: 'Camiseta', 
    preu: 20.99,
    disponible: true,
    descripcio: 'Camiseta de cotó'
  };

  producte2: Producte = {
    id: 2,
    nom: 'Ivan',
    preu: 5,
    disponible: false
  }



}