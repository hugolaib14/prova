import { Component, Input } from '@angular/core';
import { Producte } from '../../interfaces/producte';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css'
})
export class Tarjeta {
  @Input({ required: true }) producte!: Producte;
}