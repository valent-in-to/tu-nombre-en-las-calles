import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results-display',
  templateUrl: './results-display.component.html',
  styleUrls: ['./results-display.component.css']
})
export class ResultsDisplayComponent implements OnInit {

  @Input() results: number;
  @Input() name: string;

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  loadChart(){
    return this.router.navigateByUrl('view/chart')
  }
  loadTable(){
    return this.router.navigateByUrl('view/table')
  }
  loadMapBox(){
    return this.router.navigateByUrl('view/mapbox')
  }
}
