import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
  path: '',
  loadChildren : ()=> import('./pages/main/main.module').then(m=> m.MainModule)
  },
  {
    path: 'chart',
    loadChildren: ()=> import('./pages/data-visualization/data-visualization.module').then(m=> m.DataVisualizationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
