import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil {
  nom: string = 'Hugo';
  cognom: string = 'Laib';
  edat: number = 19;
  cicle: string = 'Desenvolupament d’Aplicacions Web';

  get nomComplet(): string {
    return `${this.nom} ${this.cognom}`;
  }

  get inicials(): string {
    const partsNom: string[] = [...this.nom.split(/\s+/), ...this.cognom.split(/\s+/)];
    return `${partsNom.map((part: string) => part[0].toUpperCase()).join('.')}.`;
  }

  get generacio(): string {
    if (this.edat >= 25 && this.edat <= 40) {
      return 'Milennial';
    }
    if (this.edat >= 10 && this.edat <= 24) {
      return 'Gen Z';
    }
    return 'Altre';
  }
}