import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  modo: string = 'No seleccionado';
  partida: string = 'No seleccionada';

  public log() {
    console.log('Modo: ' + this.modo + ' \nPartida: ' + this.partida);
  }
}
