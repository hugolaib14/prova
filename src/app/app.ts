import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte } from './interfaces/producte';
import { Musica } from './interfaces/musica';
import { esMajorEdat, saludar, sumarArray } from './funcions';
import { Perfil } from './components/perfil/perfil';
import { Producte as ProducteClasse } from '../producte2';

@Component({
  selector: 'app-root',
  imports: [Perfil, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-entorns-2627');

  ciutats: string[] = ['Barcelona', 'Madrid', 'Girona', 'Tarragona'];

  nom: string = 'Angular';
  nom2: string = 'Laravel';
  versio: number = 20;
  actiu: boolean = true;
  colors: string[] = ['vermell', 'verd', 'blau'];
  frameworks: string[] = [this.nom, this.nom2];
  punts: number[] = [10, 15, 20];
  ciutat: string = 'Lleida';
  codiP: number = 25001;

  producte: Producte = {
    id: 1,
    nom: 'Camiseta',
    preu: 20.99,
    estoc: 20,
    categoria: 'roba',
    disponible: true,
    descripcio: 'Camiseta de cotó'
  };
  arrayProductes: Producte[] = [this.producte];
  producte2: Producte = {
    id: 2,
    nom: 'Ivan',
    preu: 5,
    estoc: 0,
    categoria: 'altres',
    disponible: false
  };
//<!-- crea un array de minim 5 elements al app.ts
//usa @for per mostrar els elements de l'array
//$index per mostrar l'ordre
//-->
  productes: Producte[] = [
    {
      id: 1,
      nom: 'teclat',
      preu: 89.99,
      estoc: 12,
      categoria: 'periferics',
      disponible: true
    },
    {
      id: 2,
      nom: 'monitor',
      preu: 179.99,
      estoc: 8,
      categoria: 'periferics',
      disponible: true
    },
    {
      id: 3,
      nom: 'ratolí',
      preu: 24.99,
      estoc: 67,
      categoria: 'perifèrics',
      disponible: true
    },
    {
      id: 4,
      nom: 'ordenador',
      preu: 399.99,
      estoc: 7,
      categoria: 'dispositivo',
      disponible: true
    },
    {
      id: 5,
      nom: 'webcam',
      preu: 39.99,
      estoc: 10,
      categoria: 'periferics',
      disponible: true
    }
  ];
  p1 = new ProducteClasse('Teclat', 89.99);

  constructor() {
    console.log(this.producte);
    console.log(this.p1.preuIva);
    console.log(this.p1.toString());
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


