import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';



import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameQueryService {

  constructor( private http: HttpClient ) { }

  fetchStreets(name: string) {

    let params = new HttpParams().set("nombre",name).set("max", "5000");
    return this.http.get(environment.streetsAPI, { params: params}).toPromise(); 
  }
}
