import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter-alone',
  standalone: true,
  templateUrl: './counterAlone.component.html',
  imports: [],
  styleUrls: ['./counterAlone.component.css'],
})
export class CounterAloneComponent {

  @Input()
  public counter: number = 10;

 }
