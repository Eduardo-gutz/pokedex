import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { PokedexService } from 'src/app/services/pokedex.service';
import pokeNames from 'src/app/helpers/allPokemonsNames';
import { FormControl } from '@angular/forms';
import { pokemonsTypes } from 'src/app/helpers/allPokemonsTypes';
import { BasicName } from 'src/app/interfaces/common.interface';
import { TypesService } from 'src/app/services/types.service';
import { TypeResponse } from 'src/app/interfaces/types.interface';
import { select, Store } from '@ngrx/store';
import { filterType } from 'src/app/store/paginator/filters/filter.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private filterByType$: Observable<TypeResponse | undefined>

  pokemons: BasicName[] = []
  totalItems: number = 0
  pokemonsTypes = pokemonsTypes
  isFiltred: boolean = false
  valueFilter: string = ''
  
  myControl = new FormControl('');
  filteredOptions!: Observable<string[]>;
  
  constructor(
    private pokedexServ: PokedexService,
    private router: Router,
    private typeServ: TypesService,
    private store: Store<{filterByType: TypeResponse}>
  ) {
    this.filterByType$ = this.store.pipe(select('filterByType'));
  }
  
  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
      );

    this.filterByType$.pipe(take(1)).subscribe((filter) => {
      if(filter) {
        this.pokemons = filter.pokemon.map((poke) => poke.pokemon )
        this.totalItems = this.pokemons.length
        this.isFiltred = true
        this.valueFilter = filter.name
      } else {
        this.isFiltred = false
        this.getPokemonsFromService()
      }
    })
  }
  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return pokeNames.filter(option => option.toLowerCase().includes(filterValue));
  }
  
  private getPokemonsFromService() {
    this.pokedexServ.getPokemons().pipe(take(1)).subscribe((response: any) => {
      this.pokemons = response.results
      this.totalItems = response.count
    })
  }

  searchPokemon() {
    const nameToSearch = this.myControl.value
    this.router.navigateByUrl(`/details/${nameToSearch}`)
  }

  filterPokemons($event: string) {
    if(!$event) {
      this.getPokemonsFromService()
      this.isFiltred = false
      this.store.dispatch(filterType({filterByType: undefined}))
      return
    }
    this.typeServ.getPokemonType($event).subscribe((type: TypeResponse) => {
      this.pokemons = type.pokemon.map((poke) => poke.pokemon )
      this.totalItems = this.pokemons.length
      this.isFiltred = true

      this.store.dispatch(filterType({filterByType: type}))
    })
  }

}
