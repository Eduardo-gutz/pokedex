import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceByUrlService {

  constructor(private http: HttpClient) { }

  getResponse<Type>(url: string) {
    return this.http.get<Type>(url);
  }
}
