import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Specie } from '../interfaces/specie.interface';

@Injectable({
  providedIn: 'root'
})
export class SpecieService {
  url: string = 'https://pokeapi.co/api/v2/pokemon-species/'

  constructor(private http: HttpClient) { }

  getSpecieById(id: number) {
    return this.http.get<Specie>(`${this.url}${id}`)
  }
}
