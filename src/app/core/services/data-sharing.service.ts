import { Injectable } from '@angular/core';


//servicio para compartir informacion entre módulos hermanos, no se si fue la mejor solución

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  public results_data: any;
  constructor() { }

  public setData(data): void{
    this.results_data = data;
  }
  
  public getData(): any{
    return this.results_data;
  }
}
