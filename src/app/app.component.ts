import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  background$: Observable<string>;
  title = 'pokedex';

  background: string = '#FFFFFF'

  constructor(private store: Store<{background: string}>) {
    this.background$ = this.store.pipe(select('background'))
  }
  
  ngOnInit() {
    this.background$.subscribe((back) => {
      this.background = back
    })
  }
}
