import { Component, Input, OnInit } from '@angular/core';
import { Type } from 'src/app/interfaces/pokemon.inteface';
import typesColors from 'src/environments/typesColors';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent implements OnInit {
  @Input() type!: Type
  typesColors: any = typesColors

  constructor() { }

  ngOnInit(): void {
  }

}
