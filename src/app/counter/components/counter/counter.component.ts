import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter : {{counter}}</h3>



<button (click)="incrementBy((change))">+{{change}}</button>


<button (click)="reset()">Reset</button>
<button (click)="decrementBy((change))"> -{{change}}</button>`
})

export class CounterComponent {
  constructor() { }
  public counter = 10;
  public change = 1;

  reset(): void {
    this.counter = 10;
  }
  incrementBy(value: number): void {
    this.counter += value;
  }
  decrementBy(value: number): void {
    this.counter -= value;
  }


}
