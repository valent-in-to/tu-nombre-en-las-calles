import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import { DataVisualizationRoutingModule } from './data-visualization-routing.module';
import { TableComponent } from './table/table.component';
import { MapComponent } from './table/map/map.component';


@NgModule({
  declarations: [ChartComponent, 
  TableComponent,
  MapComponent
],
  imports: [
    CommonModule,
    DataVisualizationRoutingModule,
  ]
})
export class DataVisualizationModule { }
