import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/core/services/data-sharing.service';
import { Router } from '@angular/router';

//importando libreria para dibujar el gráfico sobre un canvas
import { Chart } from 'chart.js';  

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {

  results: any;
  chart: any;
  provincias: any;

  constructor( private dataSharing: DataSharingService,
    private router: Router ) { }

  ngOnInit(): void {
    if (this.dataSharing.getData() == null){
      this.router.navigateByUrl(''); //sin informacion para visualizar no se puede acceder al compnente
    }

    this.results = this.dataSharing.getData()
    this.provincias = this.getProvincias(this.results)
    this.drawChart(this.provincias)
    
    
    
  }


  getProvincias(results){

    let provincias = [];
    for (let i = 0; i < results.length; i++){
      provincias.push(results[i].provincia.nombre) 
    }

    let provincias_set = new Object()  // objeto con una key por cada povincia en la que haya una calle con ese nombre, 
    provincias.map(x=>{        //si existe el nombre como key agrego uno a la suma, si no, creo la key y le asigno el valor 1
      if(provincias_set[x]){
        provincias_set[x] += 1; 
      }else{
        provincias_set[x] = 1;
      }
    })
    console.log(provincias_set)
    return provincias_set
  }

  drawChart(data){
    //dibujando el gráfico con los parámetros descriptos en la documentacion de la libreria
    //https://www.chartjs.org/docs/latest/getting-started/usage.html
    this.chart = new Chart('canvas', {  
      type: 'bar',  
      data: {  
        labels: Object.keys(this.provincias),  
        datasets: [  
          {  
            data: Object.values(this.provincias),  
            borderColor: '#1b1e23',  
            backgroundColor: "#1b1e23",  
          }  
        ]  
      },  

      options: { 
        legend: {  
          display: false 
        },  
        scales: {  
          xAxes: [{  
            display: true  
          }],  
          yAxes: [{  
            display: true ,
            ticks:{
              precision: 0,
              beginAtZero: true,
            }
          }],  
        }  
      }});  
    }

   

}  


  


