
//Classe Alumne

export class Alumne {
  constructor(
    public nom: string,
    public edat: number,
    public cicle: string,
    public notes: number[]
  ) {}

  presentar(): string {
    return `Soc ${this.nom}, tinc ${this.edat} anys i estudio ${this.cicle}`;
  }

  get mitjanaNotes(): number {
    if (this.notes.length === 0) {
      return 0;
    }

    return this.notes.reduce((total, nota) => total + nota, 0) / this.notes.length;
  }

  get haAprobat(): boolean {
    return this.mitjanaNotes >= 5;
  }
}

const alumne1 = new Alumne('Hugo', 20, 'Desenvolupament Web', [7, 8, 6]);
const alumne2 = new Alumne('Ivank', 19, 'Sistemes Microinformàtics i Xarxes', [4, 3, 5]);

console.log(alumne1.presentar());
console.log(alumne1.haAprobat);
console.log(alumne2.presentar());
console.log(alumne2.haAprobat);
