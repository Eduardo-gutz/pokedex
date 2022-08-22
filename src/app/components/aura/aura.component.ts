import { Component, Input, OnInit } from '@angular/core';
import { Type } from 'src/app/interfaces/pokemon.inteface';
import typesColors from 'src/environments/typesColors';

@Component({
  selector: 'app-aura',
  templateUrl: './aura.component.html',
  styleUrls: ['./aura.component.css']
})
export class AuraComponent implements OnInit {
  @Input() types!: Type[]

  typesColors = typesColors
  background: string = ''

  ngOnInit(): void {
  }
  
  ngOnChanges() {
    const colors = this.types.map((type) => (typesColors as any)[type.type.name])
    if(colors.length > 1) {
      this.background = `background: linear-gradient(to right,${colors[0]}66,${colors[1]}66) border-box`
    } else {
      this.background = `background: ${colors[0]}66`
    }
  }
}
