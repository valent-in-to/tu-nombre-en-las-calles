import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartComponent } from './chart/chart.component';
import { TableComponent } from './table/table.component';
import { MapComponent } from './table/map/map.component';



const routes: Routes = [
    {
        path: 'chart',
        component: ChartComponent
    },
    {
      path: 'table',
      component: TableComponent
    },
    {
      path: 'map',
      component: MapComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataVisualizationRoutingModule { }
