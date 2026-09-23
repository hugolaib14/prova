import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte } from './interfaces/producte'; //PER PODER UTILITZAR LA INTERFICIE PRODUCTE HEM DE FER UN IMPORT
import { Musica } from './interfaces/musica';
import { esMajorEdat, saludar, sumarArray } from './funcions';



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

  productes: Producte[] = [this.producte, this.producte2];

  p1 =  new ProduceClass('Teclat', 89.99);
  

  constructor() {
    console.log(this.producte.toString());
    console.log(this.p1.preuAmbIva);
    console.log(this.p1.toString());
  }

  //1. AFEGIU UN METODE A LA CLASSE PRODUCTE descripico{} que retorni un string amb nom i preu
  //2. METODE descompte() que retorni el preu amb un 10% de descompte
  //3. creeu un nou producte i mostreu el descompte per consola
  //4. cerqueu la manera de mostrar el descompte amb un popup
  

  //PARTE B DEL EJERCICIO
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('angular-entorns-2627');

  constructor() {
    console.log(saludar('món'));
    console.log(esMajorEdat(18));
    console.log(sumarArray([1, 2, 3, 4, 5]));
  }

  musiques: Musica[] = [
    {
      id: 1,
      nom: 'Tití Me Preguntó',
      artista: 'Bad Bunny',
      album: 'Un Verano Sin Ti',
      durada: 200,
      descarregada: true,
      genere: 'Reggaeton'
    },
    {
      id: 2,
      nom: 'En Su Nota',
      artista: 'Omar Courtz',
      album: 'Primera Musa',
      durada: 195,
      descarregada: true,
      genere: 'Reggaeton'
    },
    {
      id: 3,
      nom: 'Luna',
      artista: 'Feid',
      album: 'FERXXOCALIPSIS',
      durada: 188,
      descarregada: false,
      genere: 'Reggaeton'
    },
    {
      id: 4,
      nom: 'La Inocente',
      artista: 'Mora',
      album: 'Primer Dia de Clases',
      durada: 222,
      descarregada: true,
      genere: 'Reggaeton'
    },
    {
      id: 5,
      nom: 'Coco Chanel',
      artista: 'Eladio Carrion',
      album: '3MEN2 KBRN',
      durada: 209,
      descarregada: false,
      genere: 'Trap'
    }
  ];

  getActius(): Musica[] {
    return this.musiques.filter((element: Musica) => element.descarregada);
  }

  findById(id: number): Musica | undefined {
    return this.musiques.find((element: Musica) => element.id === id);
  }

  formatarElement(element: Musica): string {
    return `${element.nom} - ${element.artista} (${element.album}, ${element.durada} segons)`;
  }
}


//PAARTE C

export class LlistaMusica {
  nom: string;
  elements: Musica[];

  constructor(nom: string, elements: Musica[] = []) {
    this.nom = nom;
    this.elements = elements;
  }

  afegir(element: Musica): void {
    this.elements.push(element);
  }

  eliminarPerId(id: number): boolean {
    const index: number = this.elements.findIndex((element: Musica) => element.id === id);
    if (index === -1) {
      return false;
    }
    this.elements.splice(index, 1);
    return true;
  }

  get quantitat(): number {
    return this.elements.length;
  }
}
