import { Component } from '@angular/core';
import { last } from 'rxjs';

@Component({
  selector: 'app-heres-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['ironman', 'spiderman', 'hulk', 'thor', 'capitan america'];

  public lastDeletedHero: string = '';
  public addHero(heroName: string) {
    this.heroNames.push(heroName);
  }
  public deleteLastHero() {
    this.lastDeletedHero = this.heroNames.pop() || '';
  }
}
