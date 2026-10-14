import { Component, Input } from '@angular/core';
import { Producte } from '../../interfaces/producte';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css'
})
export class Tarjeta {
  @Input({ required: true }) producte!: Producte;
  @Input() producteXif!: Producte;

  mostrarDesc: boolean = false;

  preuAmbIva(p: Producte): string {
    return (p.preu * 1.21).toFixed(2);
  }

  get estatDisponibilitat(): string {
    return this.producte.estoc > 0 ? 'Disponible' : 'Esgotat';
  }

  toggleDesc(): void {
    this.mostrarDesc = !this.mostrarDesc;
  }
}