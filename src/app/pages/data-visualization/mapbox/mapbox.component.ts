import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/core/services/data-sharing.service';
import { GeolocationService } from 'src/app/core/services/geolocation.service';

import * as mapboxgl from 'mapbox-gl';
import { environment } from '@env/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css']
})
export class MapboxComponent implements OnInit {

  mapbox: mapboxgl.Map;
  data: any;
  req_data: any;
  
  constructor( private dataSharing: DataSharingService,
    private geoService: GeolocationService,
    private router: Router) { }

  ngOnInit(): void {
    //preparo y realizo la peticion de coordenadas
    this.data = this.dataSharing.getData()
    //si no hay data es xq no hubo query todavia, redirijo al index
    if(!this.data){
      this.router.navigateByUrl('')
    }
    this.drawMap()

    this.req_data = this.prepareRequest(this.data)
    this.geoService.fetchCoordinates(this.req_data).then(x=>{
      console.log(x)
      this.addMarkers(x)
    });
    
    
    
  }

  prepareRequest(data){
    //extraigo de la info sólo id que necesito para comunicarme con mi api
    let itemList = {}
    for(let i = 0; i < this.data.length; i++){
      itemList[i] = this.data[i].localidad_censal.id
    }
    return itemList 
  }

  drawMap(){
    (mapboxgl as any).accessToken = environment.mapBoxToken
    this.mapbox = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-63.5989206,-38.4192641],
      zoom: 3
      });
  }
  
  addMarkers(marker_list){
    for(let i = 0; i < marker_list.length; i++){
    let marker = new mapboxgl.Marker()
    .setLngLat([marker_list[i].centroide_lon, marker_list[i].centroide_lat])
    .addTo(this.mapbox);
    }
    
  }
}
