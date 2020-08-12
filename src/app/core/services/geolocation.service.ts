import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor( private http: HttpClient ) { }

  fetchCoordinates(data){
    return this.http.post(environment.geoAPI,data).toPromise()
  }
}
