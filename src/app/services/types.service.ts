import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { TypeResponse } from '../interfaces/types.interface';

@Injectable({
  providedIn: 'root'
})
export class TypesService {
  private url: string = 'https://pokeapi.co/api/v2/type/';

  constructor(private http: HttpClient) { }

  getPokemonType(type: string) {
    return this.http.get<TypeResponse>(`${this.url}${type}`)
  }
}
