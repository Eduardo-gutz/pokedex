import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  url = 'https://pokeapi.co/api/v2/pokemon'

  constructor(private http: HttpClient) { }

  public getPokemons(offset = 0, size = 20) {    
    return this.http.get<any>(`${this.url}?offset=${offset}&size=${size}`)
  }
}
