import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/core/services/data-sharing.service';
import { Router } from '@angular/router'
import { TableData } from "src/app/core/interfaces/table-data";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  results:any;
  data: TableData[]

  constructor( private dataSharing: DataSharingService,
    private router: Router ) { }

  ngOnInit(): void {
    this.results = this.dataSharing.getData()

    if (this.results == undefined){
      this.router.navigateByUrl(''); //sin informacion para visualizar no se puede acceder al compnente
    }

    this.prepareTable()
   
  }

  prepareTable(){
    let dataArray = [<TableData>{}]

    for(let i = 0; i < this.results.length; i++){
      let data = <TableData>{}

      data.tipo = this.results[i].categoria;
      data.nombre = this.results[i].nombre
      data.departamento = this.results[i].departamento.nombre;
      data.localidad = this.results[i].localidad_censal.nombre;
      data.provincia = this.results[i].provincia.nombre;
      data.nomenclatura = this.results[i].nomenclatura
      dataArray.push(data)
    }
    dataArray.shift ()
    return this.data = dataArray
  }



}


