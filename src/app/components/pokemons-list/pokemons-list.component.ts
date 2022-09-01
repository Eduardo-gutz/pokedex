import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { BasicName } from 'src/app/interfaces/common.interface';
import { PokedexService } from 'src/app/services/pokedex.service';
import { backgroundColor } from 'src/app/store/background/background.action';
import { paginatorPage } from 'src/app/store/paginator/paginator/paginator.action';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit {
  @Input() pokemonsList: BasicName[] = []
  @Input() totalItems: number = 0
  @Input() thereIsFilter: boolean = false

  pageIndex$: Observable<number>

  currentPage: number = 0
  pageSize: number = 20

  get pagePokemonList() {
    const firstIndex = this.currentPage * this.pageSize;
    const lastIndex = firstIndex + this.pageSize;
    
    return this.thereIsFilter ? this.pokemonsList.slice(firstIndex, lastIndex) : this.pokemonsList
  }

  constructor(private pokedexServ: PokedexService, private store: Store<{pageIndex: number}>) {
    this.pageIndex$ = this.store.pipe(select('pageIndex'))
  }

  ngOnInit(): void {
    this.pageIndex$.subscribe((page) => {
      this.currentPage = page
      if(!this.thereIsFilter) {
        this.pokedexServ.getPokemons((page) * this.pageSize).pipe(take(1)).subscribe((response: any) => {
          this.pokemonsList = [...response.results]
        })
      }
    })
    this.store.dispatch(backgroundColor({background: '#FEFBE7'}))
  }

  nextPage($event: any) {
    this.store.dispatch(paginatorPage({pageIndex: $event.pageIndex}))
    window.scrollTo(0, 0)
  }

}
