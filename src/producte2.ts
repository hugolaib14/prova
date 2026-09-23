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
    