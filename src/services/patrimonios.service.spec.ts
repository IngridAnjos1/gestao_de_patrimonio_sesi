import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatrimoniosService {
  private apiUrl = 'https://prova-tecnico.azurewebsites.net/api-docs/';

  constructor(private http: HttpClient) { }

  getPatrimonios() {
    return this.http.get(this.apiUrl);
  }
}
