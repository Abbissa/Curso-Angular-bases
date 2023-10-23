import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name: 'Goku',
    power: 15000
  },
  {
    name: 'Vegeta',
    power: 7500
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    // emitir id del personaje a eliminar
    if (!id) {
      return;
    }
    console.log('onDeleteCharacter', { id });
    this.onDelete.emit(id);
  }

}

