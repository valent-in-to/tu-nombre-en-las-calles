import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchbarComponent } from './searchbar/searchbar.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
    {
        path: '',
        component: SearchbarComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'view',
      loadChildren: ()=> import('./data-visualization/data-visualization.module').then(m=> m.DataVisualizationModule)
    }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
