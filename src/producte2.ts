//Primera classe
export class Producte {
    nom: string;
    preu: number;

    constructor(nom: string, preu: number) {
        this.nom = nom;
        this.preu = preu;
    }


    //métode normal
    toString(): string {
        return `${this.nom} - ${this.preu}€`;
    }

    //getter i setter
    get preuIva(): number {
        return this.preu * 1.21;
    }


//1. AFEGIU UN METODE A LA CLASSE PRODUCTE descripico{} que retorni un string amb nom i preu
  descripcio(): string {
    return `${this.nom} - ${this.preu}€`;
  }



//2. METODE descompte() que retorni el preu amb un 10% de descompte

// Mètode sol·licitat per al descompte
  descompte(): number {
    return this.preu * 0.90;
  }
}