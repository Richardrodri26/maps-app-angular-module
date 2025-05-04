import { Component } from '@angular/core';
import { CounterAloneComponent } from "../../components/counterAlone/counterAlone.component";
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  standalone: true,
  // imports: [CommonModule],
  templateUrl: './alonePage.component.html',
  styleUrls: ['./alonePage.component.css'],
  imports: [CounterAloneComponent, SideMenuComponent],
})
export class AlonePageComponent {
  constructor(){}
 }
