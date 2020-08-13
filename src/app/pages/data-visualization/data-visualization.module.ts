import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import { DataVisualizationRoutingModule } from './data-visualization-routing.module';
import { TableComponent } from './table/table.component';
import { MapboxComponent } from './mapbox/mapbox.component';
import { GeolocationService } from 'src/app/core/services/geolocation.service';


@NgModule({
  declarations: [ChartComponent, 
  TableComponent,
  MapboxComponent
],
  imports: [
    CommonModule,
    DataVisualizationRoutingModule,
  ],
  providers: [
    GeolocationService
  ]
})
export class DataVisualizationModule { }
