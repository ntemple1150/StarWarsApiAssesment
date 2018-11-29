import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SwapiServiceService {
  private _swapiUrl = "https://swapi.co/api"

  constructor(private _http: HttpClient) { }

  getPeople(inputSearch: string) : Observable<any> {
    console.log(`${this._swapiUrl}/people/?format=json&search=${inputSearch}`)
    return this._http.get<any>(`${this._swapiUrl}/people/?format=json&search=${inputSearch}`)
  }

  getShips(inputSearch: string) : Observable<any> {
    return this._http.get<any>(`${this._swapiUrl}/starships/?format=json&search=${inputSearch}`)
  }

  getFilms(inputSearch: string) : Observable<any> {
    return this._http.get<any>(`${this._swapiUrl}/films/?format=json&search=${inputSearch}`)
  }
}