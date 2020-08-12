import { Injectable } from '@angular/core';


//servicio para compartir informacion entre módulos hermanos, no se si fue la mejor solución

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  public results_data: any;
  public map_address: any;

  constructor() { }

  public setData(data): void{
    this.results_data = data;
  }
  
  public getData(): any{
    return this.results_data;
  }

  public setMapAddress(info): void{
    this.map_address = info;
  }

  public getMapAddress(){
    return this.map_address
  }
}
