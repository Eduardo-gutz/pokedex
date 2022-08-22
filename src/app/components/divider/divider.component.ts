import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent implements OnInit {
  @Input() height: number = 8;
  @Input() colors: string[] = ['#000000']

  colorStr: string = '#000000'

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {    
    if(this.colors.length > 1) {
      this.colorStr = `linear-gradient(to right,${this.colors[0]}87,${this.colors[1]}87) border-box`
    } else {
      this.colorStr = `${this.colors[0]}87`
    }
  }

}
