import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonDetails } from '../interfaces/pokemon.inteface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url = 'https://pokeapi.co/api/v2/pokemon/'

  constructor(private http: HttpClient) { }

  public getPokemon(id: number | string = 0) {    
    return this.http.get<PokemonDetails>(`${this.url}${id}`)
  }
}
