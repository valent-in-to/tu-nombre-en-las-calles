import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import { DataVisualizationRoutingModule } from './data-visualization-routing.module';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [ChartComponent, TableComponent],
  imports: [
    CommonModule,
    DataVisualizationRoutingModule
  ],
  
})
export class DataVisualizationModule { }
