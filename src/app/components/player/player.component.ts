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
  nombre : String = "Prueba";
  vida : String = "50";
  vidaMaxima : String = "100";
  mana : String = "50";
  manaMaximo : String = "100";
  manaCargado : String = "50";
  cansancio : String = "8";
  cansancioMaxiomo : String = "8";
  rfisico : String = "70";
  rmagico : String = "70";
  rpsiquico : String = "70";
  presencia : String = "50";
  aguilidad : String = "8";
  destreza : String = "8";
  fuerza : String = "8";
  constitucion : String = "8";
  percepcion : String = "8";
  inteligencia : String = "8";
  poder : String = "8";
  voluntad : String = "8";
  movimiento : String = "40";
  move : String = "5";
}
