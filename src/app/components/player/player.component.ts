import { provideRouter } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  nombre : String = "";
  vida : String = "";
  vidaMaxima : String = "";
  mana : String = "";
  manaMaximo : String = "";
  manaCargado : String = "";
  cansancio : String = "";
  cansancioMaximo : String = "";
  rfisico : String = "";
  rmagico : String = "";
  rpsiquico : String = "";
  presencia : String = "";
  agilidad : String = "";
  destreza : String = "";
  fuerza : String = "";
  constitucion : String = "";
  percepcion : String = "";
  inteligencia : String = "";
  poder : String = "";
  voluntad : String = "";
  movimiento : String = "";
  move : String = "";
}
