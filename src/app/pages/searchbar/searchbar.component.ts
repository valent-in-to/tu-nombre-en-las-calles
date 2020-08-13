import { Component, OnInit } from '@angular/core';
import { NameQueryService } from 'src/app/core/services/name-query.service';
import { NgForm } from '@angular/forms';

import { DataSharingService } from "src/app/core/services/data-sharing.service";


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  name: string;
  results: any;

  constructor( private nameQuery: NameQueryService,
               private dataSharing: DataSharingService ) { }

  ngOnInit(): void {
    if (this.dataSharing.getData()){
      this.results = this.dataSharing.getData()
    }
  }

  getStreets(form: NgForm){
    this.name = form.value.name 
    if(!this.name){
      return
    }
  
    return this.nameQuery.fetchStreets(this.name).then((x:any) => {
      // Como la api devuelve no sólo nombres iguales sino parecidos debo filtrar los objetos en el cliente 
      this.results = x.calles.filter(each=>{
      /*  Solo incluyo los que contienen la palabra exacta, no los que la tienen como parte de otra palabra (ej: martin-martinez), si los que 
        la contienen como parte de un nombre compuesto por mas palabras (ej: martin rodriguez)*/
        return each.nombre.match(RegExp(`\\b${this.name}\\b`, 'i'))
      })
      this.dataSharing.setData(this.results); //envio la lista completa al servicio compartido con el modulo de visualizacion de la informacion
      },err =>{
        console.log(err)
      });
   
  }
  
}
