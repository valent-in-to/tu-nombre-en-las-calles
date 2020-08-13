import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { PagesRoutingModule } from './pages-routing.module';

import { SearchbarComponent } from './searchbar/searchbar.component';

import { HttpClientModule } from "@angular/common/http";

import { NameQueryService } from 'src/app/core/services/name-query.service';
import { ResultsDisplayComponent } from './searchbar/results-display/results-display.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [SearchbarComponent,
    ResultsDisplayComponent,
    AboutComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    NameQueryService
  ],
  bootstrap: [SearchbarComponent]
})
export class PagesModule { }
