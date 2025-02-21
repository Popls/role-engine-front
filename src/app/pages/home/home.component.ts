import { Component } from '@angular/core';
import { PlayerComponent } from "../../components/player/player.component";
import { MGeneralComponent } from "../../components/controllers/m-general/m-general.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [PlayerComponent, MGeneralComponent]
})
export class HomeComponent {

}
