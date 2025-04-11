import { Component } from '@angular/core';
import { PlayerComponent } from "../../components/player/player.component";
import { MGeneralComponent } from "../../components/controllers/m-general/m-general.component";
import { CombateComponent } from '../../components/controllers/combate/combate.component';
import { ResistenciasComponent } from "../../components/controllers/resistencias/resistencias.component";
import { SecundariasComponent } from "../../components/controllers/secundarias/secundarias.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [PlayerComponent, MGeneralComponent, CombateComponent, ResistenciasComponent, SecundariasComponent]
})
export class HomeComponent {

}
