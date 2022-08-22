import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Pokemon } from 'src/app/interfaces/pokemon.inteface';
import { PokedexService } from 'src/app/services/pokedex.service';
import pokeNames from 'src/app/helpers/allPokemonsNames';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemons: Pokemon[] = []
  totalItems: number = 0
  autocompleteOptions: string[] = pokeNames
  
  myControl = new FormControl('');
  filteredOptions!: Observable<string[]>;
  
  constructor(private pokedexServ: PokedexService, private router: Router) { }
  
  ngOnInit(): void {
    this.getPokemonsFromService()
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.autocompleteOptions.filter(option => option.toLowerCase().includes(filterValue));
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

}
